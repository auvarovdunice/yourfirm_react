import React from 'react';
import HomePageMain from './HomePageMain';
import  Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import './home.scss';

const HomePage = () => (
    <React.Fragment>
        <Header />
        <HomePageMain />
        <Footer />
    </React.Fragment>
);

export default HomePage;
