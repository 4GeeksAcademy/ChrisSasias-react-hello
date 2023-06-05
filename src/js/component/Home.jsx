import React from "react";

import Navbar from "./Navbar.jsx";
import Body from "./Body.jsx";
import Header from "./Header.jsx";



//create your first component
const Home = () => {
	return (
	<div>		
		<Navbar />
		<Header />
		<Body />
	</div>
	);
};

export default Home;
