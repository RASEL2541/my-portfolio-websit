import React from 'react';
import { Link } from 'react-router-dom';

const Manubar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Md Rasel Hossain</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
      </li>
      <li class="nav-item">
       <Link to="/home">  <a class="nav-link" href="#">Home</a></Link>
      </li>
      <li class="nav-item">
      <Link to="/project">  <a class="nav-link" href="#">Project</a></Link> 
      </li>
      <li class="nav-item">
        <Link to="/blog">  <a class="nav-link" href="#">Blog</a></Link>
      </li>
      <li class="nav-item">
        <Link to="/about"> <a class="nav-link" href="#">About</a></Link>
      </li>
      <li class="nav-item">
       <Link to="/contact"> <a class="nav-link" href="#">Contact</a></Link> 
      </li>
    </ul>
    
  </div>
</nav>
        </div>
    );
};

export default Manubar;