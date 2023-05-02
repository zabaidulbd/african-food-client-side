import React from 'react';

const SingleChefDetails = ({ single }) => {

    const { image, name, experience, number, likes, } = single;


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
                <button className='btn btn-primary'>View Details</button>
            </div>
        </div>
    );
};

export default SingleChefDetails;