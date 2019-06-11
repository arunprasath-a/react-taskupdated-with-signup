import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { FaUserCircle } from "react-icons/fa";
import "../css/signuppage.css";
import { Button } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";

class TestSignUpPageComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters are allowed";
            }
        }



        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }


    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            alert("Form submitted");
        } else {
            alert("Please check the errors")
        }

    }


    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }


    render() {
        return (
            <React.Fragment>
                {/* <Container>
                    
                    <Row>
                        <Col xs="6" sm="4"></Col>
                        <Col xs="6" sm="4">
                            <Form>
                                <FaUserCircle className="userCircleClass" size="150" color="#0d53c1" />
                                <FormGroup>
                                    <Label for="exampleEmail">Name</Label>
                                    <Input valid={false} required />
                                    <FormFeedback valid>Sweet! that name is available</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input invalid={false} />
                                    <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="examplePassword">Phone number</Label>
                                    <Input invalid={false} />
                                    <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="examplePassword">Email</Label>
                                    <Input invalid={false} />
                                    <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                </FormGroup>

                                <Button color="primary">Sign Up</Button>
                            </Form>

                        </Col>
                        <Col xs="6" sm="4"></Col>
                    </Row>
                </Container> */}

                <div>
                    <form name="contactform" className="contactform" onSubmit={this.contactSubmit.bind(this)}>
                        <div className="col-md-6">
                            <fieldset>
                                <input refs="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
                                <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                                <br />
                                <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                                <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                                <br />
                                <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]} />
                                <br />
                                <input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]} />
                                <br />
                            </fieldset>
                        </div>
                        <Button>Submit</Button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default TestSignUpPageComponent;