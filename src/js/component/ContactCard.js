import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import PinkBabies from "../../img/PinkBabies.jpg";
import { Link } from "react-router-dom";
import { AppContext } from "../layout.js";
//Need to import all things that will be used on this particular component(which is ContactCard)//


//Need to export this particular component which is ContactCard to AppContext
export const ContactCard = props => {
    //the destructuring of the following so it can be used from the props.contact without having to type it all out.
    const { fullname, address, email, phone } = props.contact;
    //the useContext hook gives you access to the variable inside of the Global Context(AppContext-here carries the Global Context and in this file is in layout.js)
    const { contacts, setContacts, myFetch, currentContact, setCurrentContact } = useContext(AppContext)


    return (
        <li className="list-group-item">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img src={PinkBabies} alt="flamingos" className="rounded-circle mx-auto d-block img-fluid" />
                </div>
                <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                    <div className=" float-right">

                        <Link className="btn btn-success" to="/edit">
                            <button onClick={() => setCurrentContact(props.contact)} className="btn" >
                                <i className="fas fa-pencil-alt mr-3" />
                            </button>
                        </Link>
                        <button className="btn" onClick={() => {
                            setCurrentContact(props.contact)
                            props.onDelete({})
                        }
                        
                        }>
                            <i className="fas fa-trash-alt" />
                        </button>
                    </div>
                    <label className="name lead">{props.contact.full_name}</label>
                    <br />
                    <i className="fas fa-map-marker-alt text-muted mr-3" />
                    <span className="text-muted">{props.contact.address}</span>
                    <br />
                    <span
                        className="fa fa-phone fa-fw text-muted mr-3"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="(870) 288-4149"
                    />
                    <span className="text-muted small">{props.contact.phone}</span>
                    <br />
                    <span
                        className="fa fa-envelope fa-fw text-muted mr-3"
                        data-toggle="tooltip"
                        data-original-title=""
                        title=""
                    />
                    <span className="text-muted small text-truncate">{props.contact.email}</span>
                </div>
            </div>
        </li>
    )
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
    history: PropTypes.object,
    onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
    onDelete: null
};
