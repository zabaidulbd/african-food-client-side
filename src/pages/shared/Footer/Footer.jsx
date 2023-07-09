import React from 'react';
import { Card } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logoFooter from '../../../assets/Navbar/logo.png'

const Footer = () => {
    return (
        <div className='mt-5 container'>
            <Card bg="light" variant="light">
                <div className='d-flex justify-content-around'>
                    <div className='mt-5'>
                        <div className='d-flex'>
                            <div>
                                <img className='rounded-5' style={{ width: '110px', height: '110px' }} src={logoFooter} alt="" />
                            </div>
                            <div className='mt-4 ms-3'>
                                <h5>African food Blog</h5>
                                <h6>Dhaka, Bangladesh</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Card.Body className='p-5 text-black'>
                            <Card.Title>Explore More</Card.Title>
                            <Card.Text>
                                <span>More Recipes</span> <br />
                                <span>Healthy Living</span><br />
                                <span>More Blogs</span>
                            </Card.Text>
                        </Card.Body>
                    </div>
                    <div className='mt-5 text-black me-5'>
                        <h4 className='mb-3'>Connect</h4>
                        <p> <span><FaFacebook className='fs-5' /></span> <span className='mx-2'><FaTwitter className='fs-5'></FaTwitter></span> <span><FaLinkedinIn className='fs-5'></FaLinkedinIn></span> <span><FaYoutube className='ms-2 fs-4'></FaYoutube></span> </p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Footer;