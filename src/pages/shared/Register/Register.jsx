import React from 'react';
import Header from '../Header/Header';
import { Button, Container, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <Header></Header>
            <Container>
                <h3>Please Register</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo Url</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter photo" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">Register</Button>
                    <p>Have an account <Link to={'/login'}>Login</Link></p>
                </Form>
                <Footer></Footer>
            </Container>
        </>
    );
};

export default Register;