import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import * as service from './contact-service';

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
        return (
            <Dashboard
                updateContact={this.updateContact}
                editingContact={this.state.editingContact}
                setEditingContact={this.setEditingContact}
                addContact={this.addContact}
                deleteContact={this.deleteContact}
                contacts={this.state.contacts} />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));