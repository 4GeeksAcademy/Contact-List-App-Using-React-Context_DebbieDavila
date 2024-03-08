import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../layout";


export const AddContact = () => {
    const { contacts, setContacts, myFetch } = useContext(AppContext)

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSave = () => {

        var newContact = {
            "full-name": fullname,
            "email": email,
            "agenda_slug": "DebbieDavila",
            "address": address,
            "phone": phone
        }

        fetch("https://playground.4geeks.com/apis/fake/contact/", {
            method: 'POST',
            body: JSON.stringify(newContact),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => myFetch())

    }
    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Add a new contact</h1>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" onChange={(e) => setFullname(e.target.value)} className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="phone" className="form-control" placeholder="Enter phone" />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Enter address" />
                    </div>
                    <button onClick={handleSave} type="button" className="btn btn-primary form-control">
                        save
                    </button>
                    <Link className="mt-3 w-100 text-center" to="/add">
                        or get back to contacts
                    </Link>
                </form>
            </div>
        </div>
    );
};
