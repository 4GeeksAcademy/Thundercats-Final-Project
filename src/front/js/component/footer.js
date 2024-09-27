import React from "react";
import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 text-center bg-dark text-light">
            <div className="container-fluid">
                <h3>Subscribe to our email list</h3>
                <div className="row justify-content-center">
                    <div className="col-6 col-md-3">
                        <input
                            className="text-center form-control border-dark"
                            name="email"
                            type="email"
                            placeholder="Your Email"
                        />
                    </div>
                </div>
				<div className="row mt-4">
					<div className="col-4 col-md-4">
						<h5>Pages</h5>
						<ul className="list-unstyled">
							<li><a href="/about">About Us</a></li>
							<li><Link to="/contact" className="nav-link">Contact Us</Link></li>
						</ul>
					</div>
					<div className="col-4 col-md-4">
						<h5>More Pages</h5>
						<ul className="list-unstyled ">
							<li><a href="/login">Login</a></li>
							<li><a href="/signup">Signup</a></li>
							<li><a href="/">Home</a></li>
						</ul>
					</div>
					<div className="col-4 col-md-4">
						<h5>Social Media</h5>
						<ul className="list-unstyled">
							<li><a href="https://www.facebook.com/">Facebook</a></li>
							<li><a href="https://x.com/">Twitter</a></li>
							<li><a href="https://www.instagram.com/">Instagram</a></li>
						</ul>
					</div>
				</div>
            </div>
            <p>
                Made with <i className="fa fa-heart text-danger" /> by{" "}
                <a href="http://www.4geeksacademy.com">THUNDERCATS... GOOOOOO</a>
            </p>
        </footer>
    );
};














