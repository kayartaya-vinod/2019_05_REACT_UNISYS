import React, { Component } from 'react';

class ContactForm extends Component {
    saveChanges = () => {
        let contact = {};
        for (let name in this.refs) {
            let field = this.refs[name];
            contact[field.name] = field.value;
        }
        // add or update this.state to our contacts array in the App component

        if (this.props.editingContact === null) {
            this.props.addContact(contact);
        }
        else {
            this.props.updateContact(contact);
        }
        // and then clear the textfields
        for (let name in this.refs) {
            let field = this.refs[name];
            field.value = '';
        }
        document.getElementById('name').focus();
    }

    render() {
        let { editingContact } = this.props;
        if (editingContact !== null) {
            for (let name in editingContact) {
                if (this.refs[name]) {
                    this.refs[name].value = editingContact[name];
                }
            }
        }

        return (
            <div>
                <h3>Contact details</h3>
                <form className="form">
                    <input type="hidden" name="id" ref="id" />
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" autoFocus ref="name"
                            name="name"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" ref="email"
                            name="email"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" ref="phone"
                            name="phone"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input id="city" ref="city"
                            name="city"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture">Picture</label>
                        <input id="picture" ref="picture"
                            name="picture"
                            className="form-control" />
                    </div>

                    <button onClick={this.saveChanges} type="button"
                        className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;