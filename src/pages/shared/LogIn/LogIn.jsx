import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation } from 'react-router';
import { GithubAuthProvider, GoogleAuthProvider, confirmPasswordReset, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import contactImg from '../../../assets/contact/contact.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const LogIn = () => {
    const [signInError, setSignInError] = useState();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true });
                setSignInError('');
                form.reset();
            })
            .catch(error => {
                setSignInError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUpUser = result.user;
                console.log(loggedUpUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
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
                    <img className='w-75' src={contactImg} alt="" />
                </div>
                <div data-aos="fade-down" className='w-50 mt-5 ms-5'>
                    <Form className='w-75' onSubmit={handleLogin}>
                        <h1 className='mb-3'>Please Login</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Button className='mb-1' variant="secondary" size="lg" type="submit">Login</Button>
                        <div className='border border-secondary my-2'></div>
                        <div className='mb-2 ms-3'>OR</div>
                        <div className='mb-2'><span><Button onClick={handleGoogleSignIn} variant="outline-secondary" className='me-2 text-black'><FaGoogle className='me-2'></FaGoogle>Google Login </Button></span> <span><Button onClick={handleGitHubSignIn} variant="outline-secondary" className='text-black'><FaGithub className='me-2'></FaGithub>GitHub Login</Button></span></div>
                        <p>Do not have an account <Link to={'/register'}>Register</Link></p>
                    </Form>
                    <p className='text-danger'>{signInError}</p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default LogIn;