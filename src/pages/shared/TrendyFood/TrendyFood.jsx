import React, { useEffect } from 'react';
import imgTrendy from '../../../assets/trendy/food1.jpg'
import imgTrendy1 from '../../../assets/trendy/food2.jpg'
import imgTrendy2 from '../../../assets/trendy/food3.jpg'
import imgTrendy3 from '../../../assets/trendy/food4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TrendyFood = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);

    return (
        <div className='container' >
            <div data-aos="fade-down" className='text-center mb-5'>
                <h1 className='fw-bold mb-2'>Trendy Recipes</h1>
                <h6>Introducing children to new and diverse cuisines can be a great way to expand their palates and help them appreciate different cultures. African cuisine has many kid-friendly recipes that are both delicious and nutritious.With a little bit of creativity, parents can introduce their children to the delicious and diverse world of African cuisine.</h6>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div data-aos="fade-up" className="col">
                    <div className="card">
                        <img src={imgTrendy} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Piri piri chicken, Mozambique</h5>
                            <p className="card-text">Piri piri chicken is a spicy and flavorful dish originating from Mozambique.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down" className="col">
                    <div className="card">
                        <img src={imgTrendy1} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Jollof rice and egusi soup, Nigeria</h5>
                            <p className="card-text">Jollof rices are popular Nigerian dishes known for their rich flavors.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="col">
                    <div className="card">
                        <img src={imgTrendy2} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Bunny chow, South Africa</h5>
                            <p className="card-text">TBunny chow, South Africa are favorite for their salty flavour</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down" className="col">
                    <div className="card">
                        <img src={imgTrendy3} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Kapenta with sadza, Zimbabwe</h5>
                            <p className="card-text">Kapenta with sadza, Zimbabwe is favorite for their spicy flavour.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendyFood;