
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
                    </div>          
                </nav>
            </header>
        </div>
    );
}

export default Header;