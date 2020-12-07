import React from 'react';
import { Navbar } from 'react-bootstrap';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import HeaderProject from '../HedarProject/HeaderProject';
import LoginFrom from '../LoginFrom/LoginFrom';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderMain> </HeaderMain>
            <HeaderProject></HeaderProject>
            <LoginFrom></LoginFrom>


        </div>
    );
};

export default Home;