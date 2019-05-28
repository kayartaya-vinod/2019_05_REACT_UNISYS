import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        name: '',
        gender: 'Male',
        email: '',
        phone: '',
        city: '',
        picture: '/assets/images/default.jpg'
    };
    
    static getDerivedStateFromProps(props, state) {
        console.log(props, state);
        return {...props.editingContact};
    }

    changeHandler = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    addContact = () => {
        // add this.state to our contacts array in the App component
        this.props.addContact(this.state);
        // and then clear the textfields
        this.setState({
            name: '',
            gender: 'Male',
            email: '',
            phone: '',
            city: '',
            picture: '/assets/images/default.jpg'
        });
        document.getElementById('name').focus();
    }

    render() {
        return (
            <div>
                <h3>Contact details</h3>
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" autoFocus
                            name="name"
                            value={this.state.name}
                            onChange={this.changeHandler}
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input id="phone"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.changeHandler}
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input id="city"
                            name="city"
                            value={this.state.city}
                            onChange={this.changeHandler}
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture">Picture</label>
                        <input id="picture"
                            name="picture"
                            value={this.state.picture}
                            onChange={this.changeHandler}
                            className="form-control" />
                    </div>

                    <button onClick={this.addContact} type="button"
                        className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;