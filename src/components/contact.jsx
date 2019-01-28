import React, {Component} from "react";
import { Parallax } from 'react-scroll-parallax';
import {Link} from "react-router-dom";
import $ from "jquery";

export default class Contact extends Component {
    componentDidMount= () =>{
    }
    render(){
        return(
            <div className="full-theme">
            <div className="main-contact">
            <h1 className="h1-contact"> Start Getting <span className="result-contact"> Results </span> <span className="contact-number"> +1 855 WWW-PROS </span> </h1>
            <input type="text" className="name-contact"/>
            </div>
            </div>
        )
    }
}