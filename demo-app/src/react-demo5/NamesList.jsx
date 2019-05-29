import React from 'react';
import { consumer } from './context-hoc';

let Name = ({name, index, deleteName}) => (
    <li>
        {name}
        <button className="btn btn-link text-danger"
            onClick={()=>deleteName(index)}>
            &times;
        </button>
    </li>
)
Name = consumer('deleteName')(Name);
//// ----------------

const NamesList = ({ names }) => {
    return (
        <ul>
            {
                names.map((n, i) => 
                    <Name key={i} name={n} index={i} />)
            }
        </ul>
    );
}

// the consumer HOC takes property names to be injected
// into the component in question, with the corresponding
// values from the Context.Provider set in App component.
export default consumer('names')(NamesList);