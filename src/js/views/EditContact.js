import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../layout";


export const EditContact = () => {
    const { contacts, setContacts, myFetch, currentContact, setCurrentContact } = useContext(AppContext)


    const handleEdit = () => {

        fetch("https://playground.4geeks.com/apis/fake/contact/" + currentContact.id, {
            method: 'PUT',
            body: JSON.stringify(currentContact),
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
                <h1 className="text-center mt-5">Edit contact {currentContact.full_name}</h1>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" value={currentContact.full_name}
                            onChange={(e) => setCurrentContact(
                                { ...currentContact, full_name: e.target.value }
                            )} className="form-control" placeholder="Enter Full Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={currentContact.email}
                            onChange={(e) => setCurrentContact(
                                { ...currentContact, email: e.target.value }
                            )} className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="phone" value={currentContact.phone}
                            onChange={(e) => setCurrentContact(
                                { ...currentContact, phone: e.target.value }
                            )} className="form-control" placeholder="Enter phone" />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" value={currentContact.address} onChange={(e) => setCurrentContact(
                            { ...currentContact, address: e.target.value }
                        )} className="form-control" placeholder="Enter address" />
                    </div>
                    <button onClick={handleEdit} type="button" className="btn btn-primary form-control">
                        save
                    </button>

                    <Link className="mt-3 w-100 text-center" to="/edit">
                        or get back to contacts
                    </Link>
                </form>
            </div>
        </div>
    );
};