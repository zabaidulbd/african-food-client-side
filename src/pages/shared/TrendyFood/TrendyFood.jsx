import React from 'react';
import { Carousel } from 'react-bootstrap';

const TrendyFood = () => {
    return (
        <>
            <div className='text-center container mt-5'>
                <h1 className='fw-bold'>Trendy Recipes</h1>
                <h6>African cuisine is incredibly diverse, and each country has its unique flavors and cooking traditions. In recent years, many trendy African recipes have gained popularity worldwide, showcasing the continent's rich culinary heritage.As more people become interested in exploring new cuisines and flavors, African cuisine is sure to continue to gain recognition for its delicious and diverse dishes.</h6>
            </div>
            <Carousel className='container mt-5'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/selective-focus-shot-delicious-ethiopian-food-with-fresh-vegetables-wooden-table_181624-45514.jpg?w=996&t=st=1683003644~exp=1683004244~hmac=9b4058ff903cfd4f10051b72180f1ebedf0c34ba6b7d0f9c248f54fd2e505569"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Beef Tagine</h3>
                        <p>This one is extra special… Beef Tagine is an alluring labor of love that takes hours to slowly cook and simmer. It’s not your regular stew by any standard.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/meat-board_1303-9622.jpg?w=996&t=st=1683003681~exp=1683004281~hmac=94f763ee46bf11024cafb56d4113416369aa36219899a47da93d87b4e6200de7"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Maafe (Senegalese Peanut Stew)</h3>
                        <p>This West African peanut stew, Maafe (or Mafe), is loaded with rich savory flavors. Any meat of your choice goes great in this perfectly spiced peanut butter and tomato based sauce.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/side-view-meat-stew-lamb-stew-with-fried-onion-dried-fruits-with-rice-plate_141793-5013.jpg?w=996&t=st=1683003712~exp=1683004312~hmac=d2bd8003e34934d47b60427ded0eacdc6999bdf1500ec123d3958e74e0b957c0"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Kedjenou Chicken (Ivory Coast Stew)</h3>
                        <p>The Ivory Coast is one spicy country, proud of its chili tolerance! This kedjenou chicken stew is cooked “undisturbed” low and slow in its own juices along with plenty of vegetables, some hot peppers, the goodness of thyme and the smokiness of paprika.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default TrendyFood;