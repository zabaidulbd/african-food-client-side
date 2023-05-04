import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipe = () => {
    const [uniqueRecipe, setUniqueRecipe] = useState({});
    const [isDisabled1, setIsDisabled1] = useState(false);
    const [isDisabled2, setIsDisabled2] = useState(false);
    const [isDisabled3, setIsDisabled3] = useState(false);
    const chefId = useParams();
    const singleChefId = chefId.id;
    const singleChefRecipe = useLoaderData();

    useEffect(() => {

        if (singleChefRecipe) {
            const uniquePersonRecipe = singleChefRecipe.find(data => data.id == singleChefId);
            setUniqueRecipe(uniquePersonRecipe)

        }

    }, [])

    const handleToast1 = () => {
        setIsDisabled1(true);
        toast("add your recipe in favorite!");
    }
    const handleToast2 = () => {
        setIsDisabled2(true);
        toast("add your recipe in favorite!");
    }
    const handleToast3 = () => {
        setIsDisabled3(true);
        toast("add your recipe in favorite!");
    }

    return (
        <>
            <Header></Header>
            <div className='container'>
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={uniqueRecipe.image} className='img-fluid rounded-start' alt="..." />
                        </div>
                        <div className="col-md-6 p-5">
                            <div className="card-body">
                                <h2 className="card-title text-center">{uniqueRecipe.name}</h2>
                                <h5 className="card-text my-5">{uniqueRecipe.description}</h5>
                                <h6 className="card-text">Total Number of Recipes : {uniqueRecipe.number}</h6>
                                <h6 className="card-text">Experience :{uniqueRecipe.experience}</h6>
                                <h6 className="card-text">Likes : {uniqueRecipe.likes}</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title"><strong>Recipe Name : </strong>  {uniqueRecipe.recipe}</h5>
                                <p className="card-text"><strong>Ingredients : </strong>  {uniqueRecipe.ingredient}</p>
                                <p className="card-text"><strong>Cooking Method : </strong>  {uniqueRecipe.method}</p>
                                <p className="card-text"><strong>Ratings : </strong>{uniqueRecipe.rating}</p>
                            </div>
                            <button onClick={handleToast1} disabled={isDisabled1} className='btn btn-primary'>Favorite</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title"><strong>Recipe Name : </strong>  {uniqueRecipe.recipe}</h5>
                                <p className="card-text"><strong>Ingredients : </strong>  {uniqueRecipe.ingredient}</p>
                                <p className="card-text"><strong>Cooking Method : </strong>  {uniqueRecipe.method}</p>
                                <p className="card-text"><strong>Ratings : </strong>{uniqueRecipe.rating}</p>
                            </div>
                            <button onClick={handleToast2} disabled={isDisabled2} className='btn btn-primary'>Favorite</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title"><strong>Recipe Name : </strong>  {uniqueRecipe.recipe}</h5>
                                <p className="card-text"><strong>Ingredients : </strong>  {uniqueRecipe.ingredient}</p>
                                <p className="card-text"><strong>Cooking Method : </strong>  {uniqueRecipe.method}</p>
                                <p className="card-text"><strong>Ratings : </strong>{uniqueRecipe.rating}</p>
                            </div>
                            <button onClick={handleToast3} disabled={isDisabled3} className='btn btn-primary'>Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ChefRecipe;