import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import * as service from './contact-service';
import MyContext from './MyContext';

class App extends Component {

    state = {
        contacts: [],
        editingContact: null
    };

    setEditingContact = (editingContact) => {
        this.setState({ editingContact });
    }

    updateContact = (contact) => {
        service.updateContact(contact)
            .then(contact => {
                let contacts = [...this.state.contacts];
                let index = contacts.findIndex(c => c.id === contact.id);
                if (index !== -1) {
                    contacts[index] = contact;
                }
                this.setState({ contacts, editingContact: null });
            });
    }

    addContact = (contact) => {
        service.addContact(contact)
            .then(contact => {
                let contacts = [contact, ...this.state.contacts];
                this.setState({ contacts });
            });
    }

    deleteContact = (id) => {
        service.deleteContact(id)
            .then(() => {
                let contacts = [...this.state.contacts];
                let index = contacts.findIndex(contact => contact.id === id);
                if (index !== -1) {
                    contacts.splice(index, 1);
                    this.setState({ contacts });
                }
            });
    }

    componentDidMount() {
        service.getAllContacts()
            .then(contacts => this.setState({ contacts }));
    }

    render() {

        const myContextData = {
            contacts: this.state.contacts,
            editingContact: this.state.editingContact,

            addContact: this.addContact,
            updateContact: this.updateContact,
            deleteContact: this.deleteContact,
            setEditingContact: this.setEditingContact
        };

        return (
            <MyContext.Provider value={myContextData}>
                <Dashboard />
            </MyContext.Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));