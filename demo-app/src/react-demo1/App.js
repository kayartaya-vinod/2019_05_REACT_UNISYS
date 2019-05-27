import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class MyApp extends Component {

    author = 'Vinod';

    constructor() {
        super();
        this.greet = this.greet.bind(this);
    }

    greet() {
        console.log('greet() called at ', new Date());
        // following code is to be avoided, as it is trying to get value from
        // browser DOM while React maintains the state of components in a 
        // virtual DOM inside the JS VM
        let name = document.getElementById('username').value;
        alert('Greetings ' + name + '!');
        console.log('this is', this);
        console.log('Author name is', this.author);
    }

    // must override a method called render()
    render() {
        return <Fragment>
            <h1 className="highlight">Hello, World!</h1>
            <hr />
            <p>Powered by ReactJS </p>

            <div>
                <label htmlFor="username">Enter your name</label>
                <input type="text" id="username" />
                <button onClick={this.greet}>Greet!</button>
            </div>

        </Fragment>;
    }
}

const root = document.querySelector('div#root');
ReactDOM.render(<MyApp />, root);