import React from 'react';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';
import TitleBar from '../pages/shared/TitleBar/TitleBar';
import Banner from '../pages/shared/Banner/Banner';
import TrendyFood from '../pages/shared/TrendyFood/TrendyFood';

const Main = () => {
    return (
        <div>
            <TitleBar></TitleBar>
            <Header></Header>
            <Banner></Banner>
            <TrendyFood></TrendyFood>
            <Footer></Footer>
        </div>
    );
};

export default Main;