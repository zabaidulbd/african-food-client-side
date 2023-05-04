import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import ActiveLink from '../../../ActiveLink/ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Navbar className='container my-5 p-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Radhuni-African Food Blogs and Recipe Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <span className='me-2'><ActiveLink to={'/'}>Home</ActiveLink></span>
                        <span><ActiveLink to={'/blog'}>Blog</ActiveLink></span>
                    </Nav>
                    <Nav>
                        {
                            user && <Nav.Link href="#deets">
                                {
                                    <Image style={{ height: '40px' }} src="https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-holding-red-folder_1298-179.jpg?w=740&t=st=1683177286~exp=1683177886~hmac=c440209e285a379ced974449f84436bdcc297217e39170b08f534dfe769c131d" roundedCircle title="Zabaidul Islam"></Image>
                                }

                            </Nav.Link>
                        }
                        {
                            user ?
                                <Button onClick={handleLogOut} variant="secondary">Log-Out</Button> :
                                <ActiveLink to={'/login'}>Login</ActiveLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;