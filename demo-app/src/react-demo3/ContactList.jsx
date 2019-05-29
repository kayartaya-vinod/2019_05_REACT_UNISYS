// filename is given an extension of .jsx purpousely

import React from 'react';
import ContactCard from './ContactCard';
import { loadingHoc } from './loading-hoc';

function ContactList({ contacts, deleteContact, setEditingContact }) {

    let contactCards = contacts.map(contact => (
        <div className="col-md-4 col-sm-6" key={contact.id}>
            <ContactCard 
                setEditingContact={setEditingContact}
                deleteContact={deleteContact} contact={contact} />
        </div>
    ));

    return <div className="row">
        {contactCards}
    </div>
}

// export default loadingHoc(ContactList, 'contacts');
export default loadingHoc('contacts')(ContactList);