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
                        src="https://img.freepik.com/free-photo/medium-shot-girl-holding-glass-with-juice_23-2148910359.jpg?w=996&t=st=1683005137~exp=1683005737~hmac=e9acd7ebb84c7e904f5f0b690414457acba96e5923a9d27ae3553092cc19533a"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Harissa (North African Chili Paste)</h3>
                        <p>This one is extra special… Beef Tagine is an alluring labor of love that takes hours to slowly cook and simmer. It’s not your regular stew by any standard.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/premium-photo/curly-haired-girl-enjoyed-variety-dishes-table_38076-2430.jpg?w=996"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Shakshuka</h3>
                        <p>This West African peanut stew, Maafe (or Mafe), is loaded with rich savory flavors. Any meat of your choice goes great in this perfectly spiced peanut butter and tomato based sauce.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/cute-black-baby-home_23-2149504646.jpg?w=996&t=st=1683005200~exp=1683005800~hmac=156971c1e1d0e73c3c9bf45e5d1f0776aa25eee10832206f0cb96637bf560f5c"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>North African Chermoula</h3>
                        <p>The Ivory Coast is one spicy country, proud of its chili tolerance! This kedjenou chicken stew is cooked “undisturbed” low and slow in its own juices along with plenty of vegetables, some hot peppers, the goodness of thyme and the smokiness of paprika.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default KidFriendlyRecipe;