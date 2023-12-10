import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


export default function Sidebar() {
    const [enter, setEnter] = useState(false);

    const toggleEnter = () => {
        setEnter((previousState) => !previousState);
    };

    return (
        <div
            className={
                "sidebar " + (enter ? "open bx-menu-alt-right" : "bx-menu")
            }
        >
            <div className="logo-details">
                <i className="bx bxl-c-plus-plus icon"></i>
                <Link href="/">
                    <div className="logo_name">Eitena</div>
                </Link>
                <i className="bx bx-menu" id="btn" onClick={toggleEnter}></i>
            </div>
            <ul className="nav-list">
                <li>
                    <i className="bx bx-search"></i>
                    <input type="text" placeholder="Search..." />
                    <span className="tooltip">Search</span>
                </li>
                <Router>
                <li id="profile">
                    <Link to="/profile">
                        <i className="bx bx-user"></i>
                        <span className="links_name">My Profile</span>
                    </Link>
                    <span className="tooltip">My Profile</span>
                </li>
                </Router>
                <li>
                    <a href="#">
                        <i className="bx bx-book"></i>
                        <span className="links_name">My Course</span>
                    </a>
                    <span className="tooltip">My Course</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-loader"></i>
                        <span className="links_name">Learning Progress</span>
                    </a>
                    <span className="tooltip">Learning Progress</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-cart-alt"></i>
                        <span className="links_name">Transactions</span>
                    </a>
                    <span className="tooltip">Transactions</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-chat"></i>
                        <span className="links_name">Feed</span>
                    </a>
                    <span className="tooltip">Feed</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-cog"></i>
                        <span className="links_name">Autentications</span>
                    </a>
                    <span className="tooltip">Autentications</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-help-circle"></i>
                        <span className="links_name">Help</span>
                    </a>
                    <span className="tooltip">Help</span>
                </li>
                <li className="profile">
                    <div className="profile-details">
                        <img
                            src="https://drive.google.com/uc?export=view&id=1ETZYgPpWbbBtpJnhi42_IR3vOwSOpR4z"
                            alt="profileImg"
                        />
                        <div className="name_job">
                            <div className="name">Eitena Groups</div>
                            <div className="job">Education</div>
                        </div>
                    </div>
                    <i className="bx bx-log-out" id="log_out"></i>
                </li>
            </ul>
        </div>
    );
}
