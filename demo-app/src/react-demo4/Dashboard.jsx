import React, { Fragment } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

import MyContext from './MyContext';

const Header = () => (
    <MyContext.Consumer>
        {
            ({ contacts }) => (
                <div>
                    <h1 className="alert alert-info">Addressbook App v1.0</h1>
                    <div className="container">
                        <h5>There are {contacts.length} contacts in your addressbook</h5>
                    </div>
                </div>
            )
        }
    </MyContext.Consumer>
);
const Footer = () => (
    <div>
        <h5 className="text-center">&copy; 2019 - All rights reserved</h5>
    </div>
);



const Dashboard = () => (
    <Fragment>
        <Header />
        <div className="container">

            <div className="row">
                <div className="col-md-3">
                    <ContactForm />
                </div>
                <div className="col-md-9">
                    <ContactList />
                </div>
            </div>

        </div>
        <Footer />
    </Fragment>
);

export default Dashboard;