import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation } from 'react-router';
import { GithubAuthProvider, GoogleAuthProvider, confirmPasswordReset, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

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
                    <div className='mb-2'><span><Button onClick={handleGoogleSignIn} variant="info">Google Login</Button></span> <span><Button onClick={handleGitHubSignIn} variant="info">GitHub Login</Button></span></div>
                    <Button variant="primary" type="submit">Login</Button>
                    <p>Do not have an account <Link to={'/register'}>Register</Link></p>
                </Form>
                <p className='text-danger'>{signInError}</p>
                <Footer></Footer>
            </Container>


        </>
    );
};

export default LogIn;