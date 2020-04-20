import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<footer className={`page-footer center grey darken-3 white-text`}>
			<h6>&copy;{new Date().getFullYear()}. All rights reserved.</h6>
			<h6>Developed with 🤍 by Andrew.</h6>
		</footer>
	);
}

export default Footer;
