import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel className='container'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/turkish-stuffed-eggplants-with-ground-beef-vegetables-baked-with-tomato-sauce_2829-10999.jpg?w=996&t=st=1683006781~exp=1683007381~hmac=5c5fa4e6a66050dd005c773d9a20bc0d5a33a6483a25eeabb7f810785cc13caa"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Delicious Foods</h3>
                        <p>This one is extra special… Beef Tagine is an alluring labor of love that takes hours to slowly cook and simmer. It’s not your regular stew by any standard.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/side-view-stewed-meatballs-with-tomato-sauce-bell-pepper-spring-onion-mint-plate_141793-5117.jpg?w=996&t=st=1683006835~exp=1683007435~hmac=4358c0badd7cde5b8bcba4c7609ec5de9402fb31481bfde24326f782555b5bf3"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Traditional Foods</h3>
                        <p>This West African peanut stew, Maafe (or Mafe), is loaded with rich savory flavors. Any meat of your choice goes great in this perfectly spiced peanut butter and tomato based sauce.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/medium-shot-happy-girls-with-food_23-2148910355.jpg?w=996&t=st=1683006871~exp=1683007471~hmac=4d3428a70195e22f42f82dead90948120b2f1ccf5790bebb4b34f56ca61fa9c3"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Kid-Friendly Foods</h3>
                        <p>The Ivory Coast is one spicy country, proud of its chili tolerance! This kedjenou chicken stew is cooked “undisturbed” low and slow in its own juices along with plenty of vegetables, some hot peppers, the goodness of thyme and the smokiness of paprika.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;