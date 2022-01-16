import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import HomePage from './pages/home';
import AboutPage from './pages/about'
import Faq from './pages/faq'
import Contacts from './pages/contacts'

import Breast from './pages/surveysInfo/breast'
import Breath from './pages/surveysInfo/breath'
import Liver from './pages/surveysInfo/liver'
import Gut from './pages/surveysInfo/gut'
import Cervix from './pages/surveysInfo/cervix'
import Prostate from './pages/surveysInfo/prostate'

import Login from './pages/auth/login'
import Register from './pages/auth/register'
import ForgotPassword from './pages/auth/forgotPassword'

import { Layout } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contacts" element={<Contacts />} />

          <Route path="breast" element={<Breast />} />
          <Route path="breath" element={<Breath />} />
          <Route path="liver" element={<Liver />} />
          <Route path="gut" element={<Gut />} />
          <Route path="cervix" element={<Cervix />} />
          <Route path="prostate" element={<Prostate />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
