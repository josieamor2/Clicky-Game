import React from "react";
import "./Footer.css";


const Footer = props => (
    <footer className="footer">

        <div className="stats row">
            <div className="logo col-lg-4 col-4 col-sm-6 col-10">
                <img src="../Images/logo.png" alt="Bob's Burgers Clicky Game"/>
            </div>
            <div className="rightwrong col-lg-3 col-sm-12">
                <h3>{props.rightWrong}</h3>
            </div>
            <div className="scores row col-lg-5 col-md-12 col-sm-12">

                <h4 class="col-6 c-score"><img src="../Images/currenScore.png" alt="Bob's Burgers Clicky Game"/> {props.score}</h4>
                <h4 class="col-6 t-score"><img src="../Images/topScore.png" alt="Bob's Burgers Clicky Game"/> {props.topScore}</h4>

            </div>
        </div>

    </footer>
);



export default Footer;