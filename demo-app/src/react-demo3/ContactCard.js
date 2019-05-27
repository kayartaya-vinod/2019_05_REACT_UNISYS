import React from 'react';

let cardStyle = {
    width: '300px'
}

const ContactCard = ({ contact }) => (
    <div className="card" style={cardStyle}>
        <img src={contact.picture} alt={contact.firstname} className="card-img-top" />

        <div className="card-body">
            <h5 className="card-title">{contact.firstname} {contact.lastname}</h5>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
        </div>
    </div>
);

export default ContactCard;