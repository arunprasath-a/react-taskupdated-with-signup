import React from "react";
import { connect } from "react-redux";
import "../css/testpage.css";
import TestPagePageComponent2 from "./testpage2";



class TestPagePageComponent extends React.Component{

    constructor(){
        super();
        this.state={
            mount:true,
            ignoreprop:0,
            seed:40
        }
        this.mountcounter = () => { this.setState({mount:true})}
        this.unmountcounter = () => { this.setState({mount:false})}
        this.ignoreprop = () => {this.setState({ignoreprop:Math.random()})}
        this.seedgenerator =() =>{this.setState({seed:Number.parseInt(Math.random()*100)})}
    }
    
    render(){
        console.log("parent rendering started");
        
        return(

            <React.Fragment>
                <h1>Hide toggle</h1>
                <button onClick={this.mountcounter} disabled={this.state.mount}>Show</button>
                <button onClick={this.unmountcounter} disabled={!this.state.mount}>Hide</button>
                <button onClick={this.ignoreprop}>Ignore prop</button>
                <button onClick={this.seedgenerator}>Generate seed</button>
                    {this.state.mount? <TestPagePageComponent2 seed={this.state.seed} ignoreprop={this.state.ignoreprop}/> : null }
                    
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        username:state.userName,
        counter:state.counter,
    } 
}


export default connect(mapStateToProps)(TestPagePageComponent);