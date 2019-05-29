import React, { useState } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import NamesList from './NamesList';
import Context from './Context';
import NameForm from './NameForm';

// const p1 = { name: 'vinod', email: 'vinod@vinod.co'};
// let {name, email} = p1;

// const arr = [100, 200];
// let [n1, n2] = arr;

const App = () => {
    // define the state for this function component
    const [names, setNames] = useState([
        'vinod', 'shyam', 'harish'
    ]);

    const addName = (name) => {
        setNames([...names, name]); // re-renders this component
    }

    const deleteName = (index) => {
        let newNames = [...names];
        newNames.splice(index, 1);
        setNames(newNames); // re-renders this component
    }

    const contextValues = {
        names, addName, deleteName
    };

    return (
        <Context.Provider value={contextValues}>
            <div className="container">
                <h1>React Hooks Demo</h1>
                <hr />

                <Header a={10} b={20} />

                <NameForm />
                <NamesList />
            </div>
        </Context.Provider>
    )
};

render(<App />, document.getElementById('root'));