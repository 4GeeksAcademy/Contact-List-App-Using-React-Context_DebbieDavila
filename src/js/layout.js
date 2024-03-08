import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Contacts } from "./views/Contacts";
import { AddContact } from "./views/AddContact";

export const AppContext = React.createContext();
//global state
//create your first component

const Layout = () => {

	const basename = process.env.BASENAME || "";

	const [contacts, setContacts] = useState([])
	function myFetch() {
		fetch("https://playground.4geeks.com/apis/fake/contact/agenda/DebbieDavila")
			.then((resp) => resp.json())
			.then((data) => setContacts(data))
			.catch(err => console.log(err));
	}
	useEffect(() => {
		() => myFetch()

	}, [])


	return (
		<div>

			<AppContext.Provider value={{ contacts, setContacts, myFetch }}>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Routes>
							<Route path="/" element={<Contacts />} />
							<Route path="/add" element={<AddContact />} />
							<Route path="/demo" element={<Demo />} />
							//<Route path="/home" element={<Home />} />
							<Route path="/single/:theid" element={<Single />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</AppContext.Provider>
		</div>
	);
};

export default injectContext(Layout);
