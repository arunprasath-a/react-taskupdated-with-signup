import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Prompt } from "react-router-dom";

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';


class AboutUsPageComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                { headerName: "Make", field: "make" },
                { headerName: "Model", field: "model" },
                { headerName: "Price", field: "price" }
            ],
            rowData: [
                { make: "Toyota", model: "Celica", price: 35000 },
                { make: "Ford", model: "Mondeo", price: 32000 },
                { make: "Porsche", model: "Boxter", price: 72000 }
            ]
        }
    }



    componentDidUpdate() {
        console.log("component did update happened");

    }



    render() {
        return (

            <React.Fragment>


                <Prompt when={true} message={"Are you sure want to redirect ?"} ></Prompt>

                <Navbar color="light" light expand="md">
                    <NavbarBrand href="#">About Us</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/" onClick={this.props.onLogOut} onClickCapture={() => sessionStorage.removeItem("name")} >LogOut</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            |
                        </NavItem>
                        <NavItem>
                            <NavLink to="/TestPage/">TestPage</NavLink>
                        </NavItem> */}
                    </Nav>
                </Navbar>

                <div>
                    <h1>Welcome {sessionStorage.getItem("name")}</h1>
                </div>
                <hr />
                <div className="ag-theme-balham" style={{ height: '300px', width: '800px' }}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        username: state.userName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: () => dispatch({ type: "ON_LOG_OUT" }),

    }
}




export default connect(mapStateToProps, mapDispatchToProps)(AboutUsPageComponent);