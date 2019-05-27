import React, { Component, Fragment } from 'react';
import RDOM from 'react-dom';

// stateless component; equivalent of the render() method of the stateful component
function Header(props) {
    return (
        <h3>{props.title}</h3>
    )
}

const Author = ({ author, authorEmail }) => (
    <Fragment>
        <p>Author name: {author}</p>
        <p>Author email: {authorEmail}</p>
    </Fragment>
);

class App extends Component {
    render() {
        // console.log(this);
        return (
            <Fragment>
                <h1>This is a react component</h1>
                <hr />
                <Header {...this.props} />
                <Author {...this.props} />
                
            </Fragment>
        );
    }
}

let title = 'A basic React demo';
let p1 = {
    author: 'Vinod Kumar Kayartaya',
    authorEmail: 'vinod@kvinod.com'
};

RDOM.render(<App title={title} {...p1} />,
    document.getElementById('root'));