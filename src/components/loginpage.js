import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import "../css/login.css";
import axios from 'axios';
import { connect } from "react-redux";



class LogInPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userDetails: "",

        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }





    onFormSubmit(event) {
        if (this.userDetailsMap.get(this.props.userName) !== undefined) {
            if (this.userDetailsMap.get(this.props.userName) === this.props.password) {
                alert("login successful");
                this.props.history.push(`/About/`);
                sessionStorage.setItem("name", this.props.userName);

            } else {
                alert("Invalid credentials");
                event.preventDefault();
            }
        } else {
            alert("User not found");
            event.preventDefault();
        }
    }



    componentDidMount() {

        console.log("component did mount");
        axios.get("http://my-json-server.typicode.com/arunprasath-a/fakeApiNew3/users")
            .then(response => {
                this.setState({
                    userDetails: response.data,
                })
                this.logUsers();
            })
    }


    logUsers() {
        this.userDetailsMap = new Map();
        var val = this.state.userDetails[0];
        console.log(val);
        Object.keys(val).map(element => {
            this.userDetailsMap.set(element, val[element])
            return this.userDetailsMap;
        })
        console.log(this.userDetailsMap);
    };



    render() {
        console.log("rendering started here");

        return (

            <React.Fragment>
                <Container>

                    <Row>
                        <Col xs="1" ></Col>
                        <Col xs="10" >
                            <Navbar color="light" light expand="md">
                                <NavbarBrand href="#">Log In</NavbarBrand>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink to="/">Go Back</NavLink>
                                    </NavItem>
                                </Nav>
                            </Navbar>

                        </Col>
                        <Col xs="1"></Col>
                    </Row>
                    <Row>
                        <Col xs="3"></Col>
                        <Col xs="6"><div className="loginform">
                            <form onSubmit={this.onFormSubmit}>

                                <br></br>
                                <br></br>
                                <div className="loginElements">
                                    <div>
                                        <h1>Join with us !</h1>
                                    </div>
                                    <br></br>


                                    <div>
                                        <InputGroup>

                                            <Input placeholder="username" className="nameInpClass" required name="username" value={this.props.userName} onChange={this.props.onNameChange} />
                                            <InputGroupAddon addonType="append">Ur Name Here </InputGroupAddon>
                                        </InputGroup>
                                    </div>
                                    <br></br>
                                    <div>
                                        <InputGroup>
                                            <Input placeholder="Password" type="password" className="passInpClass" required value={this.props.password} onChange={this.props.onPassChange} />
                                            <InputGroupAddon addonType="append">Password Here</InputGroupAddon>
                                        </InputGroup>
                                    </div>

                                    <br></br>
                                    
                                    <div>
                                        <Button color="primary">Log In</Button>

                                    </div>

                                </div>

                            </form>
                        </div>
                        </Col>
                        <Col xs="3"></Col>
                    </Row>

                </Container>

            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        password: state.password,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNameChange: (event) => dispatch({ type: "NAME_CHANGE", nameValue: event.target.value }),
        onPassChange: (event) => dispatch({ type: "PASS_CHANGE", passValue: event.target.value })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LogInPageComponent); 