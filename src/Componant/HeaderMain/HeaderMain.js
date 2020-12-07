import React from 'react';
import Picture from "../../imgs/Picture.png"
import vlonter from "../../imgs/vlonter.png"
import "./HeaderMain.css";

const HeaderMain = () => {
    return (
        <div className="container" >
            <h1 className="col-8 form-group mx-auto" >PROJECT</h1>
            <div  className="fade-down-right">
            <div className="row">
                <div className="col-md-5">
                    <img src={Picture} alt=""/>
                    <h1>Creative Agency</h1>
                    <p> Creative Agency is full stack website.This website has a separate dasboard for clint and admins</p>
                    <a className="float-sm-left btn btn-primary" href="https://www.w3schools.com">website</a>
                    <a className="float-sm-right btn btn-primary" href="https://github.com/RASEL/creative-agency.git">Github</a>
                    </div>
                <div className="col-md-5">
                <img src={vlonter} alt=""/>
                    <h1>Volunteer Network</h1>
                    <p>This is full stack website.Using this website any people and to volunteer work</p>
                    <a className="float-sm-left btn btn-primary" href="https://www.w3schools.com">website</a>
                    <a className="float-sm-right btn btn-primary" href="https:/github.com/RASEL2541/volunteer-fortend.git">Github</a>
                </div>  
        </div>
            </div>
      
        </div>
    );
};

export default HeaderMain;