import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                        Discover beauty and relaxation at GitKart GlamHub. Book your makeup, nails, hair, spa, and mehndi services with us. Elevate your style, enhance your beauty. Welcome to a world of self-care.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        Ambika Kalna, Purba Bardhaman, West Bengal,
                        713409
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: +91-8597138810
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: rahulkirtoniya12@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">Bridal Makeup</div>
                <div className="text">Smokey Makeup</div>
                <div className="text">Airbrush Makeup</div>
                <div className="text">Nail Extension</div>
                <div className="text">Ind-Western Mehndi</div>
                <div className="text">Hair Cut & Spa</div>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    GitKart 2023 Created By Rahul K.
                </div>
                <img src={Payment} alt =""/>
            </div>
        </div>
        
    </footer>
    );
};

export default Footer;
