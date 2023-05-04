import React from 'react';
import { Card } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-5'>
            <Card bg="dark" variant="dark">
                <div className='d-flex justify-content-around'>
                    <div>
                        <Card.Body className='ms-5 p-5 text-primary'>
                            <Card.Title>Explore</Card.Title>
                            <Card.Text>
                                <span>Recipes</span> <br />
                                <span>Fitness</span> <br />
                                <span>Healthy Living</span><br />
                                <span>More Blogs</span>
                            </Card.Text>
                        </Card.Body>
                    </div>
                    <div className='mt-5 text-primary'>
                        <h4>Connect</h4>
                        <p> <span><FaFacebook /></span> <span className='mx-2'><FaTwitter></FaTwitter></span> <span><FaLinkedinIn></FaLinkedinIn></span> <span><FaYoutube className='ms-2'></FaYoutube></span> </p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Footer;