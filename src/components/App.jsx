import React, {Component} from "react";
import {Route} from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import Nav from "./nav";
import Strategy from "./strategy";
import Ux from "./ux";
import Web from "./web";
import Marketing from './marketing';
import Deliver from './deliver';
import Contact from './contact'

class App extends Component{
    render(){
        return( 
        <div>
            <Nav/>
            <Strategy/>
            <Ux/>
            <Web/>
            <Marketing/>
            <Deliver/>
            <Contact/>
        </div>
    )}
}


export default App;