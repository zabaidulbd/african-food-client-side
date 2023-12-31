import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Button, Container, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router';
import { AuthContext } from '../../../providers/AuthProvider';
import registrationImg from '../../../assets/registration/registration.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                navigate(from, { replace: true });
                setRegisterError('');
                form.reset();
            })
            .catch(error => {
                setRegisterError(error.message);
            })
    }
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);
    return (
        <>
            <Header></Header>
            <div className='d-flex'>
                <div data-aos="fade-up" className='w-50 ms-5'>
                    <img className='w-75' src={registrationImg} alt="" />
                </div>
                <div data-aos="fade-down" className='w-50 mt-5 ms-5'>
                    <Form className='w-75' onSubmit={handleRegister}>
                        <h1 className='mb-3'>Please Register</h1>
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
                        <Button variant="secondary px-3" type="submit">Register</Button>
                        <p className='mt-2'>Have an account <Link to={'/login'}>Login</Link></p>
                    </Form>
                    <p className='text-danger'>{registerError}</p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;