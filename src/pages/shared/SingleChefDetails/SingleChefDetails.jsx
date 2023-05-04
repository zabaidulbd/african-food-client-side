import React from 'react';
import { Link } from "react-router-dom";

const SingleChefDetails = ({ single }) => {
    const { id, image, name, experience, number, likes, } = single;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between">{name}<span>Likes:{likes}</span></h5>
                    <div className="card-text text-center">
                        <h6>Years of Experience: {experience}</h6>
                        <h6>Number of Recipe: {number}</h6>
                    </div>
                </div>
                <Link className='ms-2 mb-4 text-center' to={`/chef/${id}`}><button className='btn btn-info'>View Recipes</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleChefDetails;