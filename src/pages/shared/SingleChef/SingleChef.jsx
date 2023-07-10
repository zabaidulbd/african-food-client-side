import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import SingleChefDetails from '../SingleChefDetails/SingleChefDetails';

const SingleChef = () => {
    const [ChefDetails, setChefDetails] = useState([]);
    useEffect(() => {
        fetch('https://assignment-ten-server-side-zabaidulbd.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefDetails(data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div className='container my-5'>
            <div className='container text-center mb-5'>
                <h1 className='fw-bold mb-2'>Famous Chef</h1>
                <h6>Introducing children to new and diverse cuisines can be a great way to expand their palates and help them appreciate different cultures. African cuisine has many kid-friendly recipes that are both delicious and nutritious.With a little bit of creativity, parents can introduce their children to the delicious and diverse world of African cuisine.</h6>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    ChefDetails.map(single => <SingleChefDetails key={single.id} single={single}></SingleChefDetails>)
                }
            </div>
        </div>
    );
};

export default SingleChef;