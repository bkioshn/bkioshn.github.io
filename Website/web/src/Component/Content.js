import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css'

function Content() {
    return(
        <div className="container-fluid" id="content">
            <div className="row">
                <div className="col-lg-6">
                    <div id="profilePic">
                        <img id = "proPic" className="img-fluid" src = "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/655.jpeg?raw=true" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div id="allcon">
                        <div id="quote">
                            <h1>"Passionate about Programming"</h1>
                        </div>
                        <div id="info">
                            <p> Name: Arissara Chotivichit Blue</p>
                            <p> Age:19 </p>
                            <p> Email: bkioshn@gmail.com </p>
                            <p> Education: SIIT </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Content;