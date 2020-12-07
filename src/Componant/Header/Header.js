import React from 'react';
import pic from '../../imgs/pic.jpg';
import'./Header.css'
import PDF from "../../imgs/PDF.pdf";
import { FaFacebook,FaInstagramSquare, FaTwitter, FaLinkedin,FaGithub,FaFacebookMessenger} from "react-icons/fa";
const Header = () => {
    return (
        <div className="row">
           
            <div className="col-md-6">
                <img className="immages-style" src={pic} alt=""/>
           </div>
            <div className="col-md-6">
                <ol>
                    <li>
                    <a className="icon" target="_blank" href="https://www.facebook.com/profile.php?id=100009918075346"><FaFacebook/></a>
                    <a className="icon" target="_blank" href="https://www.facebook.com/messages"> <FaFacebookMessenger/></a>
                    <a className="icon" target="_blank" href="linkedin.com/in/md-rasel-885aa9200/"><FaLinkedin/></a>
                    <a className="icon" target="_blank" href="github.com/RASEL2541"> <FaGithub/></a>
                    <a className="icon" target="_blank" href=""><FaInstagramSquare/></a>
                    <a className="icon" target="_blank" href=""> <FaTwitter/></a>
                    </li>
                </ol>
                <h1>WELCOME TO MY WORLD</h1>
                <h2>Hi I,m Md. Rasel Hossain</h2>
                <h3>Front-end Developer</h3>
                <h2>Barishal,Bangladesh</h2> 
                <a className="float-sm-left btn btn-primary" href={PDF} target="_blank" rel="noopener noreferrer" download>Download Resume</a>    
            </div>    
        </div>
    );
};

export default Header;