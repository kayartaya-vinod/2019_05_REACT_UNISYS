import React from 'react';

class Customers extends React.Component {
    isUpper = true;
    state = {
        name: 'VINOD'
    };

    constructor() {
        super();
        console.log('Customers.constructor() called')
    }

    buttonHandler = (e) => {
        if(this.isUpper) {
            // this.state.name = this.state.name.toLowerCase();
            this.setState({name: this.state.name.toLowerCase()})
        }
        else {
            // this.state.name = this.state.name.toUpperCase();
            this.setState({name: this.state.name.toUpperCase()})
        }
        this.isUpper = !this.isUpper;
        // this.forceUpdate();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillUnmount() {
        console.log('Customers.componentWillUnmount() called');
    }

    componentDidUpdate() {
        console.log('Customers.componentDidUpdate() called');
    }

    render() {
        console.log('Customers.render() called');
        window['comp'] = this;
        return (
            <div>
                <h1>This is Customers Page</h1>
                <p>Name: {this.state.name}</p>
                <button className="btn btn-outline-primary"
                    onClick={this.buttonHandler}>Toggle case</button>
            </div>
        );
    }
    componentDidMount() {
        console.log('Customers.componentDidMount() called')
    }
}

export default Customers;