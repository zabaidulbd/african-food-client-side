import React from 'react';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';
import TitleBar from '../pages/shared/TitleBar/TitleBar';
import Banner from '../pages/shared/Banner/Banner';
import TrendyFood from '../pages/shared/TrendyFood/TrendyFood';
import KidFriendlyRecipe from '../pages/shared/KidFriendlyRecipe/KidFriendlyRecipe';

const Main = () => {
    return (
        <div>
            <TitleBar></TitleBar>
            <Header></Header>
            <Banner></Banner>
            <TrendyFood></TrendyFood>
            <KidFriendlyRecipe></KidFriendlyRecipe>
            <Footer></Footer>
        </div>
    );
};

export default Main;