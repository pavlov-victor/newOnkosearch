import React, { useState } from 'react'

import { InfoScreen, TextInfoScreen, ThreeScreen, FourScreen, LinkToSurveysScreen, MyContainer, MyButton } from '../../../components'

import { CaruselSurvey, TitleScreen } from '../../../constructor'

const Gut = () => {
    const [state, setState] = useState(false)
    const data1 = [
        {
            type: 'text',
            elem: [
                'Ыарыһахтар 3-5 бырыһыаннара утумунан төрөппүттэриттэриттэн бэриллибит синдромнаах буолаллар, олортон саамай тарҕаммыттара Линч синдрома, суон оһоҕос аденоматоһа уонна MutYH-ситимнээх полипоз. Уоннааҕы ыарыһахтарга рак үөскээһинэ түбэспиччэ буолар.',
                'ВОЗ дааннайынан суон оһоҕос рага онкология ыарыыларыгар үһүс миэстэни ылар. Суон оһоҕос рагынан сылын ахсын 1 мөл. киһи ыалдьар, 600 тыһ. киһи сыл ахсын бу ыарыыттан сылтаан өлөр. Дьон быраастарга хойут тиийэр буолан, ыарыһахтар 30 бырыһыаннарыгар рак IV стадиятын диагностыыллар. Дьиҥэр, суон оһоҕос рага саҕаланан эрэрин эрдэ билии - киһи олоҕун уһун буолуутун сүрүн мэктиэтэ',
                'Кутталы үксэтэр фактордар:'
            ],
        },
        {
            type: 'column',
            elem: [
                'күннэтэ аһыыр аска эт элбэҕэ (Саха сирин тыйыс айылҕатыгар бу, биллэн турар, олох ирдэбилэ);',
                'суон оһоҕос хроническай ыарыылара баара (холобур, неспецифическэй язвалаах колит, Крон ыарыыта);',
                'табахтааһын;',
                'арыгыны элбэхтик иһии;',
                'уойуу эбэтэр ыйааһын ииндэксэ үрдээһинэ;',
                'хамсаабат буолуу, сытан-олорон тахсыы.'
            ],
        },
        {
            title: 'Симптомнара',
            type: 'text',
            elem: [
                ' Атын онкология ыарыыларын курдук, суон оһоҕос рага өр кэм устата симптома суох улаатыан сөп. Ол иһин кэмиттэн кэмигэр профилактикалаан чинчийии улахан суолталаах. Суон оһоҕос хаҥас өттүгэр искэн үөскүүр түгэнигэр хойууга хаан булкаастаах буолуон сөп. Маны үгүс дьон эрэ буолбакка, оннооҕор быраастар аахайбат түгэннэрэ үгүс буолар, тоҕо диэтэххэ тарҕаммыт ыарыыны - геморройу - кытта бутуйаллар.',
                'Ыарыы симптомунан эмискэ биллибит анемия (хаан аҕыйааһына) буолуон сөп. Анаалыска гемоглобин түһүүтэ туох да төрүөтэ суох буолбат, оннугу көрдөххө тута салгыы чинчийиигэ барыллыахтаах. Сороҕор рак бастакы симптомунан хойуу тахсыбат буолан хаалыыта буолар.',
                'Суон оһоҕос рагын симптомнара үксүн хойукку эрэ стадияларга биллэринэн, кэмиттэн кэмигэр хайаан да көрдөрүнэ сылдьар куолу, туох да ыалдьыбатын, кутталлаах симптомнар суохтарын да иһин - бу олоҕу быыһыан сөп',
                '“Доруобуйа харыстабыла” национальнай бырайыак толоруутун иһинэн киһиэхэ барытыгар сөп түбэһэр анкета көмөтүнэн чинчийии (скрининг) оҥоһуллубута. Бу анкета регион уратыларын учуоттуур'
            ],
        },
        {
            title: 'Основные симптомы:',
            type: 'column',
            elem: [
                'Преобладание в рационе красного мяса, которое просто незаменимоа для поддержания жизни людей в условиях Крайнего Севера Якутии;',
                'Хронические воспалительные заболевания толстой кишки (например, неспецифический язвенный колит, болезнь Крона);',
                'Курение;',
                'Чрезмерное употребление алкоголя; ',
                'Ожирение или повышенный индекс массы тела; ',
                'Низкая физическая активность. ',
            ],
        },
    ]

    const data2 = [
        {
            align: 'start',
            text: [
                'К группе высокого риска отнесены люди, в анамнезе у которых имеются родственники в первой линии с колоректальным аденоматозом и раком толстой кишки, а также люди с воспалительными заболеваниями кишечника. К группе среднего риска - люди в возрасте от 50 до 74 лет. ',
                '	В Республике Саха (Якутия) в 2019 году было выявлено 270 случаев колоректального рака. При этом на I-II стадии процесса диагностировано 43,7% заболеваний, на III стадии  - 27% и на IV стадии  - 29,3%. В течение первого года с момента установления диагноза умерло 25,5% пациентов.'
            ],
        },
    ]

    const data3 = [
        {
            title: 'Методы скрининга',
            text: [
                'Самым распространенным и безопасным методом скрининга колоректального рака является исследование в кале скрытой крови. Эффективным считается экспресс метод иммунохимического исследования кала на скрытую кровь (на наличие человеческого гемоглобина). Если тест показывает наличие крови в кале, то тогда следует выполнить фиброколоноскопию, чтобы осмотреть всю толстую и прямую кишку на наличие полипов, аденом и рака.',
                'Учитывая, что рак толстой кишки проявляется и начинает беспокоить только в поздних стадиях, жизненно важно проводить регулярные обследования, даже если ничего не беспокоит.В рамках реализации Национального проекта «Здравоохранение» разработан универсальный анкетный скрининг для выявления групп риска с учетом региональной специфики.',
            ],
        },
    ]

    return (
        <div>
            <InfoScreen
                title="ОҺОҔОС РАГА"
                description='ОҺОҔОС РАГА - суон оһоҕос уонна көнө оһоҕос тарҕаммыт искэнэ. 
                Оһоҕос ис бүрүөтүн килиэккэлэрэ үллэһиллиилэрин алҕаһа таҕыстаҕына полиптар баар буолууларын кытта ситимнээх.
                Төһө эрэ кэм ааспытын кэннэ полип аденомаҕа кубулуйар, онтон үксүгэр рак килиэккэлэрэ үөскүүллэр'
                img="gut2"
                infoImg="Frame72"
            />
            <TextInfoScreen data={data1} />
            <ThreeScreen data={data2} showInfoText={true} />
            <FourScreen data={data3} />
            <LinkToSurveysScreen link="" />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <MyButton
                    sx={{
                        bgcolor: '#EB5757',
                        mb: 5
                    }}
                    onClick={() => {
                        setState(!state)
                    }}
                >
                    Посмотреть доступные анкеты
                </MyButton>
            </div>
            {state &&
                <MyContainer
                    wrapper={false}
                    minHeight={600}
                >
                    <CaruselSurvey />
                </MyContainer>
            }
        </div>
    )
}

export default Gut