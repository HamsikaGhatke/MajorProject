import React from "react";
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className='row'>
            <div className="col-10 mx-auto">
      
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Aptitude Assessment</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
          
          </div>
            </div>
        </div>

        </>
    )
};
export default Navbar;