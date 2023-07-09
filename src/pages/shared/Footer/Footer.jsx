import React from 'react';
import { Card } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logoFooter from '../../../assets/Navbar/logo.png'

const Footer = () => {
    return (
        <div className='mt-5 container'>
            <Card bg="light" variant="light">
                <div className='d-flex justify-content-between'>
                    <div className='mt-5 ms-5'>
                        <div className='d-flex'>
                            <div>
                                <img className='rounded-5' style={{ width: '100px', height: '100px' }} src={logoFooter} alt="" />
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
                        <h4 className='mb-2'>Connect</h4>
                        <p> <span><FaFacebook /></span> <span className='mx-2'><FaTwitter></FaTwitter></span> <span><FaLinkedinIn></FaLinkedinIn></span> <span><FaYoutube className='ms-2'></FaYoutube></span> </p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Footer;