import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BottomContent.css';

function BottomContent() {
    return(
        <div>
            <div className="row justify-content-center">
                <div className="col-auto" id="program">
                    <h1> Programming Skills </h1>
                </div>
            </div>
            <div className="row" id="skill">
                <div className="col-lg-4 text-center" id="java"><p> Java</p>  </div>
                <div className="col-lg-4 text-center" id="js"> <p>JavaScript </p> </div>
                <div className="col-lg-4 text-center" id="python"> <p>Python</p> </div>
            </div>
        </div>
    );
}

export default BottomContent;

