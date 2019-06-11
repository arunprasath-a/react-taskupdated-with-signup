import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import "../css/homepage.css";
import { Button } from 'reactstrap';
//import Popup from "reactjs-popup";

export default class HomePageComponent extends React.Component {

    render() {
        return (

            <React.Fragment>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="#">HCL HomePage</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <div>
                                <NavLink className="loginNav" to="/LogIn/"><Button color="link">Log In</Button></NavLink>
                                {/* <Popup trigger={<button> Trigger</button>} position="bottom center">
                                    <div>Popup content here !!Popup content here !!Popup content here !!Popup content here !!Popup content here !!Popup content here !!Popup content here !!Popup content here !!Popup content here !!Popup content here !!</div>
                                </Popup> */}
                                <NavLink to="/SignUp/"><Button color="link">Sign Up</Button></NavLink>
                            </div>
                        </NavItem>

                    </Nav>
                </Navbar>
            </React.Fragment>

        )
    }
}



