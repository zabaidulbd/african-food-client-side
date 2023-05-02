import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import SingleChefDetails from '../SingleChefDetails/SingleChefDetails';

const SingleChef = () => {

    const [ChefDetails, setChefDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefDetails(data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <h1>single chef</h1>
            {
                ChefDetails.map(single => <SingleChefDetails key={single.id} single={single}></SingleChefDetails>)
            }

        </div>
    );
};

export default SingleChef;