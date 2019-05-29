import React from 'react';
import { consumer } from './context-hoc';

const Header = ({ names }) => {
    // let out = <h3>There are {names.length} names in your list</h3>;

    // if(names.length===0) {
    //     out = <h3 className="text-danger">Your list is empty</h3>
    // }

    return (
        <div>
            {names.length === 0 || <h3>There are {names.length} names in your list</h3>}
            {names.length !== 0 || <h3 className="text-danger">Your list is empty</h3>}
        </div>
    );
}

export default consumer('names')(Header);