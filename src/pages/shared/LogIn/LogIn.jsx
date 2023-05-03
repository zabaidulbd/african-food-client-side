import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <>
            <Header></Header>
            <Container>
                <h3>Please Login</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <div className='mb-2'><span><Button variant="info">Google Login</Button></span> <span><Button variant="info">GitHub Login</Button></span></div>
                    <Button variant="primary" type="submit">Login</Button>
                    <p>Do not have an account <Link to={'/register'}>Register</Link></p>
                </Form>
                <Footer></Footer>
            </Container>


        </>
    );
};

export default LogIn;