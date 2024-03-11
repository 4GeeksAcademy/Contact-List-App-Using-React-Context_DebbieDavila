import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../layout";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const Modal = props => {
    const { contacts, setContacts, myFetch, currentContact, setCurrentContact } = useContext(AppContext)
    const handleDelete = () => {

        fetch("https://playground.4geeks.com/apis/fake/contact/" + currentContact.id, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then(data => myFetch())

    }

    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        {props.onClose ? (
                            <button
                                onClick={() => props.onClose()}
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="modal-body">
                        <p>Warning: your contact will be forever gone!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">
                            Better Not!
                        </button>
                        <button onClick={handleDelete} type="button" className="btn btn-secondary" data-dismiss="modal">
                            Go ahead and do it!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
    history: PropTypes.object,
    onClose: PropTypes.func,
    show: PropTypes.bool
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
    show: false,
    onClose: null
};