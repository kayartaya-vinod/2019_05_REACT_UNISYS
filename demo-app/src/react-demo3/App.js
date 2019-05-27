import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactCard from './ContactCard';

let baseUrl = 'http://localhost:4000/contacts/';

class App extends Component {

    state = {
        contact: {}
    };

    async componentDidMount() {
        // fetch(baseUrl+4)
        // .then(resp=>resp.json())
        // .then(data=>{
        // });
        let resp = await fetch(baseUrl + 4);
        let contact = await resp.json();
        
        // this changes the state; but will not trigger any lifecycle method
        //this.state.contact = contact; 
        
        // this changes the state and triggers the render() lifecycle method
        this.setState({ contact });
    }

    render() {
        console.log('render called!', new Date());
        return (
            <ContactCard contact={this.state.contact} />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));