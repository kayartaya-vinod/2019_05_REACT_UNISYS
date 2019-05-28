// filename is given an extension of .jsx purpousely

import React from 'react';
import ContactCard from './ContactCard';
import MyContext from './MyContext';

export default function ContactList() {
    return <MyContext.Consumer>
        {
            ({ contacts }) => {
                let contactCards = contacts.map(contact => (
                    <div className="col-md-4 col-sm-6" key={contact.id}>
                        <ContactCard contact={contact} />
                    </div>
                ));
                return <div className="row">
                    {contactCards}
                </div>
            }
        }
    </MyContext.Consumer>
}