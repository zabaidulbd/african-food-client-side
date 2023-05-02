import React from 'react';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';
import TitleBar from '../pages/shared/TitleBar/TitleBar';
import Banner from '../pages/shared/Banner/Banner';

const Main = () => {
    return (
        <div>
            <TitleBar></TitleBar>
            <Banner></Banner>
            <Header></Header>
            <Footer></Footer>
        </div>
    );
};

export default Main;