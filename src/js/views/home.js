import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PinkBabies from "../../img/PinkBabies.jpg";
import "../../styles/home.css";
import "../../styles/demo.css";
import { AppContext } from "../layout";

export const Home = () => {
	const { store, actions } = useContext(AppContext);
	const [contacts, setContacts] = useState("");
	const [userInput, setUserInput] = useState("");



	const handleClick = () => {
		let newArray = [...contacts, { label: userInput, done: false }];
		setContacts(newArray);
		fetch("https://playground.4geeks.com/apis/fake/contact/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		});
		
	};

	return (
		<div className="container">
			<ul className="list-group">

			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};

//return (
//<div className="text-center mt-5">
//<h1>Time to Flamingle!</h1>
//	<p>
//	<img src={PinkBabies} />
//	</p>
//	<a href="#" className="btn btn-success">
//		If you see this green button, bootstrap is working
//</a>
//</div>
//);
//}
