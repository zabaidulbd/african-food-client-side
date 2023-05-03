import React, { useContext } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation } from 'react-router';

const LogIn = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })
    }




    return (
        <>
            <Header></Header>
            <Container>
                <h3>Please Login</h3>
                <Form onSubmit={handleLogin}>
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