import React from 'react';
import MyContext from './MyContext';

const ContactCard = ({ contact }) => (<MyContext.Consumer>
    {
        ({ deleteContact, setEditingContact }) => {
            return <div className="card">
                <img src={contact.picture} alt={contact.firstname} className="card-img-top" />

                <div className="card-body">
                    <h5 className="card-title">
                        {contact.gender === 'Male' ? 'Mr.' : 'Ms.'}
                        {contact.name}</h5>
                    <p>{contact.email}<br />{contact.phone}</p>
                    <p>{contact.city}</p>
                    <p>
                        <button className="btn btn-link"
                            onClick={() => {
                                setEditingContact(contact);
                            }}
                        >Edit</button> |
                        <button
                            onClick={() => {
                                if (window.confirm('Are you sure you want to delete this?')) {
                                    deleteContact(contact.id);
                                }
                            }}
                            className="btn btn-link">Delete</button>
                    </p>
                </div>
            </div>
        }
    }
</MyContext.Consumer>);


export default ContactCard;