import React, { Fragment } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const Header = ({ contacts }) => (
    <div>
        <h1 className="alert alert-info">Addressbook App v1.0</h1>
        <div className="container">
        <h5>There are {contacts.length} contacts in your addressbook</h5>
        </div>
    </div>
);
const Footer = () => (
    <div>
        <h5 className="text-center">&copy; 2019 - All rights reserved</h5>
    </div>
);

const Dashboard = ({ contacts, deleteContact, addContact, 
    editingContact, setEditingContact, updateContact }) => (
    <Fragment>
        <Header contacts={contacts} />
        <div className="container">

            <div className="row">
                <div className="col-md-3">
                    <ContactForm
                        updateContact={updateContact}
                        addContact={addContact}
                        editingContact={editingContact}
                        setEditingContact={setEditingContact} />
                </div>
                <div className="col-md-9">
                    <ContactList
                        setEditingContact={setEditingContact}
                        deleteContact={deleteContact} 
                        contacts={contacts} />
                </div>
            </div>

        </div>
        <Footer />
    </Fragment>
);

export default Dashboard;