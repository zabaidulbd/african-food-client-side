import React from 'react';
import { Link } from "react-router-dom";

const SingleChefDetails = ({ single }) => {
    const { id, image, name, experience, number, likes, } = single;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between">Name: {name}<span>Likes:{likes}</span></h5>
                    <div className="card-text">
                        <h6>Experience: {experience}</h6>
                        <h6>Total Recipe: {number}</h6>
                    </div>
                </div>
                <div className='card-footer text-center fs-5'>
                    <Link className='text-black text-decoration-none fw-semibold' to={`/chef/${id}`}>View Recipes
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default SingleChefDetails;