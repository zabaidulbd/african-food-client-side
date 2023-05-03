import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }


    return (
        <Navbar className='container my-5' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Radhuni-Food Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user && <Nav.Link href="#deets">
                                {<FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}</Nav.Link>
                        }
                        {
                            user ?
                                <Button onClick={handleLogOut} variant="secondary">Log-Out</Button> :
                                <Link to={'/login'}><Button variant="secondary">Login</Button></Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;