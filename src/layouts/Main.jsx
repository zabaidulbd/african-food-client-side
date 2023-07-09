import React from 'react';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';
import Banner from '../pages/shared/Banner/Banner';
import TrendyFood from '../pages/shared/TrendyFood/TrendyFood';
import KidFriendlyRecipe from '../pages/shared/KidFriendlyRecipe/KidFriendlyRecipe';
import SingleChef from '../pages/shared/SingleChef/SingleChef';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <SingleChef></SingleChef>
            <TrendyFood></TrendyFood>
            <KidFriendlyRecipe></KidFriendlyRecipe>
            <Footer></Footer>
        </div>
    );
};

export default Main;