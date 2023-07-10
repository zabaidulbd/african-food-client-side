import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import ActiveLink from '../../../ActiveLink/ActiveLink';
import logo from '../../../assets/Navbar/logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Navbar className='container mb-5 p-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <img className='me-5 ms-3 rounded-5' style={{ width: '100px', height: '100px' }} src={logo} alt="" />
                <Navbar.Brand href="#home" className='fs-2 fw-bold'>African Food Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <span className='ms-4 me-2'><ActiveLink to={'/'}> <span className='fw-semibold text-black fs-5'>Home</span></ActiveLink></span>
                        <span className='mx-2 text-black fw-semibold'><ActiveLink to={'/blog'}><span className='fw-semibold text-black fs-5'>Blog</span></ActiveLink></span>
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
                                <button className='ms-2 rounded-4' onClick={handleLogOut} variant="secondary">Log-Out</button> :
                                <ActiveLink to={'/login'}> <span className='fw-semibold text-black fs-4'>Login</span></ActiveLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;