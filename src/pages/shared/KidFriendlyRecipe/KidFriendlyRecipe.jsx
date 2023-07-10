import React from 'react';
import { Carousel } from 'react-bootstrap';

const KidFriendlyRecipe = () => {
    return (
        <>
            <div className='container text-center mt-5'>
                <h1 className='fw-bold'>Kid-Friendly-Recipes</h1>
                <h6>Introducing children to new and diverse cuisines can be a great way to expand their palates and help them appreciate different cultures. African cuisine has many kid-friendly recipes that are both delicious and nutritious.With a little bit of creativity, parents can introduce their children to the delicious and diverse world of African cuisine.</h6>
            </div>

            <Carousel className='container mt-5'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/cute-black-baby-home_23-2149504646.jpg?w=900&t=st=1689003143~exp=1689003743~hmac=6a3aacbc453f218490961c3c6fce917559a5fa96e75cc1283696e3be73f05e9b"
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-black'>
                        <h1>Harissa-North African</h1>
                        <h6>This one is extra special. For Your Child</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/young-kids-cooking-together_23-2149432917.jpg?w=900&t=st=1689003147~exp=1689003747~hmac=91adec2d55a8c213333218a38f099174a3d3dba0f2ebe1ae8b205f04bd680f13"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='text-black'>
                        <h1>Shakshuka-East African</h1>
                        <p>This is another best choice for child</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/young-kids-cooking-together_23-2149432912.jpg?w=900&t=st=1689003156~exp=1689003756~hmac=2085eae338ad64df3c20baf6fb03d2f38b8f4c048b38aac109d83086fcf3bca3"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='text-black'>
                        <h3>North African Chermoula</h3>
                        <p>Another vegetarian for Your Child
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default KidFriendlyRecipe;