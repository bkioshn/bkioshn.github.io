
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Header.css'

function Header() {
    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-expand-xl navbar-expand-md" id="navbar">
                    <div className="container-fluid" id="con">
                        <div className="navbar-brand" id="navbarBrand">
                            <div className="row justify-content-md-center">
                                <div className="col lg-offset-2"  id="name">
                                    <h1> Blue Chotivichit</h1>         
                                </div>
                            </div>
                        </div>
                        <div className="navbar-toggle"> 
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item"> <a className="nav-link disabled" href="#">  Home</a> </li>
                                    <li className="nav-item"> <a className="nav-link disabled" href="project.html">  Project</a> </li>
                                </ul>
                            </div>
                        </div>         
                    </div>          
                </nav>
                <div id="smallNav">
                    <ul className="visible-md d-lg-none d-xl-none d-md-none">
                        <li className="nav-item"> <a className="nav-link disabled" href="#">  Home</a> </li>
                        <li className="nav-item"> <a className="nav-link disabled" href="project.html">  Project</a> </li>
                    </ul>
                </div>  
            </header>
        </div>
    );
}

export default Header;