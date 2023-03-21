import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar sticky-top" id="navigate">
		<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
		  <div><h2>Contact List</h2></div>
		</Link>
	  </nav>
	  
	);
};
