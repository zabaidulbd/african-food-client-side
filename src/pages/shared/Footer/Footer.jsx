import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <Card bg="dark" variant="dark">
                <div className='d-flex justify-content-evenly'>
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
                    </div>
                </div>


            </Card>
        </>
    );
};

export default Footer;