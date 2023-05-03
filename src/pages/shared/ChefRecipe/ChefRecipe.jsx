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

    console.log(uniqueRecipe);


    return (
        <div>
            <h4>from chef recipe</h4>
        </div>
    );
};

export default ChefRecipe;