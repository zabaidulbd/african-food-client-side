import React from 'react';

const Banner = () => {
    return (
        <div className=" container card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <img src="https://img.freepik.com/free-photo/traditional-tajine-dishes-couscous-fresh-salad-rustic-wooden-table-tagine-lamb-meat-pumpkin-top-view-flat-lay_2829-6116.jpg?w=1060&t=st=1682997741~exp=1682998341~hmac=fd8ff0d852bcfb57bfcacbe42707ef001fa2e3268d42af08ba2c36f06d8ee622" className='img-fluid rounded-start' alt="" />
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <h5 className="card-title">South African Chakalaka</h5>
                        <p className="card-text">Chakalaka is a South African vegetable staple that normally accompanies their meats and seafood.
                            It is often featured in get togethers like their Braais (South African barbecues or cookouts) and celebration times.It’s funny, whenever I am on the lookout for unknown foods my antenna always goes way up when I find something spicy and tangy. I guess it’s predestined. Me and my flavor bomb foods! Even when it’s just a mere veggie dish. This simple dish is packed with loads of vibrant, colorful veggies and flavorful spices and fresh herbs. No wonder chakalaka comes very high on my “cook me please” list.

                            South African cuisine is often referred to as a rainbow cuisine, with varied influences. Kudos to their indigenous people, European influences as remnants of colonial eras, and Indian-Malay aspects brought with migrant workers. All this to create that beautiful rainbow melting pot.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;