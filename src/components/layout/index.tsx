import React from 'react'

import { Outlet } from 'react-router-dom'
import { styled } from '@mui/system'
import { Box } from '@mui/material'

import Header from './Header'
import Footer from './Footer'
import { Notification, ModalSurveyStatus } from '..'

const Main = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    overflow: 'hidden'
}))

const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            <Notification />
            <ModalSurveyStatus />
            <Main>
                <Outlet />
            </Main>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout