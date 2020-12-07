import React from 'react';
import "./HedarProject.css";
import panda from "../../imgs/panda.png";
import travelguru from "../../imgs/travelguru.png"
const HeaderProject = () => {
    return (
        <div className="container">
        <div data-aos="fade-down-left">
        <div className="row">
            <div className="col-md-5">
                <img src={panda} alt=""/>
                <h1>Panda Commerce</h1>
                <p>Panda Commerce is a static website.This website is online Shap.</p>
                <a className="float-sm-left btn btn-primary" href="https://www.w3schools.com">website</a>
                <a className="float-sm-right btn btn-primary" href="https://github.com/RASEL2541/panda-commerce.git">Github</a>
                </div>
            <div className="col-md-5">
            <img src={travelguru} alt=""/>
                <h1>Travel Guru</h1>
                <p>Using this website client will be able to book hotels in all the beatiful places</p>
                <a className=" float-sm-left btn btn-primary" href="https://www.w3schools.com">website</a>
                <a className="float-sm-right btn btn-primary" href="https://github.com/RASEL2541/travel-guru.git">Github</a>
            </div>  
    </div>
        </div>
   
    </div>
    );
};

export default HeaderProject;