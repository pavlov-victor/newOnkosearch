import axios from 'axios';
import cookie from 'js-cookie'

const testURL = 'http://127.0.0.1:8000/'
const publicURL = 'https://онкопоисксаха.рф/'

const api = (url) => {
    const token = cookie.get('jwttoken')
    if (token) {
        const instance = axios.create({
            baseURL: publicURL + url,
            headers: {
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            },
        })
        return instance
    } else {
        const instance = axios.create({
            baseURL: publicURL + url,
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return instance
    }
}

class API {
    getToken({ username, password }, dispatch, navigate) {
        api('api/accounts/token/').post(null, {
            username: username,
            password: password
        }).then(res => {
            cookie.set('jwttoken', res.data.access)
            dispatch({ type: 'notification', payload: { status: 'success', active: true, text: 'авторизация прошла успешно' } })
            navigate('/form-profile')
            console.log(res)
        }).catch(() => { dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'такого пользователя не существует' } }) })
    }
    register(data, dispatch, navigate) {
        api('api/accounts/user').post(null, data).then(res => {
            navigate('/login')
            dispatch({ type: 'notification', payload: { status: 'success', active: true, text: 'регистрация прошла успешно' } })
        }).catch((error) => dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'такой пользователь уже существует' } }))
    }
    forgotPassword(data, dispatch) {
        api('api/v1/user/registration/').post(null, data).then(res => {
            dispatch({ type: 'authModal', payload: { register: false, login: true, forgot: false } })
        }).catch((error) => console.log(error))
    }
    async getCity() {
        let result = await api(`api/locations/city/`).get(null)
        return result
    }
    async getOrg() {
        let result = await api(`api/locations/organisation/`).get(null)
        return result
    }
    async getSurveysTypes() {
        let result = await api(`api/surveys/survey-types/`).get(null)
        return result
    }
    async getAccountUser() {
        let result = await api(`api/accounts/user`).get(null)
        return result
    }
    putAccountUser(data, dispatch) {
        api('api/accounts/user').put(null, data).then(res => {
            dispatch({ type: 'notification', payload: { status: 'success', active: true, text: 'профиль изменен' } })
        }).catch(() => { dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'профиль не изменен' } }) })
    }
    sendSurveys(data, dispatch) {
        api('api/surveys/survey/').post(null, data).then(res => {
            console.log('res', res)
            const danger = res.data.is_danger
            const clinic = res.data.to_clinic
            if (danger == true && clinic == false) {
                dispatch({ type: 'modalSurvey', payload: { open: true, description: 'Группа высокого риска, это может означать, что у Вас имеются ряд факторов риска, которые могут вызвать развитие рака. Поэтому необходимо пройти обследование.' } })
            }
            if (danger == false && clinic == false) {
                dispatch({ type: 'modalSurvey', payload: { open: true, description: 'Тест не является на 100% точным Низкий риск означает, что вероятность развития рака мала, но не равна нулю. Необходимо ежегодно проходить медицинский осмотр.' } })
            }
            if (clinic == true) {
                dispatch({ type: 'modalSurvey', payload: { open: true, description: ' На сегодня Вам не показано прохождение скрининга, необходимо обратиться к участковому терапевту по месту жительства.' } })
            }
        }).catch(() => { dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'У вас ошибка в форме анкеты' } }) })
    }
}

export default new API()