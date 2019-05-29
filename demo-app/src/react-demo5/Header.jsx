import React from 'react';
import { consumer } from './context-hoc';

const Header = ({ names }) => {
    return (
        <h3>There are {names.length} names in your list</h3>
    );
}

export default consumer('names')(Header);