import React from 'react';
import { Container, Nav, Navbar as AppBar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
                <AppBar bg="dark" expand="lg">
                        <Container fluid>
                             <AppBar.Brand href="/"  className="text-white">Employee scroll</AppBar.Brand>
                                    <Nav
                                            className="me-auto my-2 my-lg-0 "
                                            style={{ maxHeight: '100px' }}
                                            navbarScroll
                                        >
            {/* আমরা এই জায়গায় stack and navlink ব্যবহার করার কারন আমাদের NavBar কে স্টাইল করার জন্য  */}
            
                                            <Stack direction="horizontal" gap={3}>
                                                <NavLink  to="/home" activeStyle={{ fontWeight: "bold", color:  "red" }} > Home </NavLink>
                                                <NavLink  to="/employee" activeStyle={{ fontWeight: "bold", color:  "red" }} > Employee </NavLink>
                                            </Stack>
                                    </Nav>
                        
                                 
            
                           </Container>
                 </AppBar>
        </div>
    );
};

export default Navbar;