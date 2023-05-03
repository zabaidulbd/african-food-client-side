import React, { useContext } from 'react';
import Header from '../Header/Header';
import { Button, Container, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <Header></Header>
            <Container>
                <h3>Please Register</h3>
                <Form onSubmit={handleRegister}>
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