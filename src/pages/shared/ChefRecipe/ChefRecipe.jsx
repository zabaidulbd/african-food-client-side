import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData } from "react-router-dom";

const ChefRecipe = () => {

    const [uniqueRecipe, setUniqueRecipe] = useState({});

    const chefId = useParams();
    const singleChefId = chefId.id;

    const singleChefRecipe = useLoaderData();

    useEffect(() => {

        if (singleChefRecipe) {
            const uniquePersonRecipe = singleChefRecipe.find(data => data.id == singleChefId);
            setUniqueRecipe(uniquePersonRecipe)

        }

    }, [])


    return (
        <>
            <div className="card mb-3">
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
        </>
    );
};

export default ChefRecipe;