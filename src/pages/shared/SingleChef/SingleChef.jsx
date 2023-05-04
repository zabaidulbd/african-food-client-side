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
        <div className='container my-5'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    ChefDetails.map(single => <SingleChefDetails key={single.id} single={single}></SingleChefDetails>)
                }
            </div>
        </div>
    );
};

export default SingleChef;