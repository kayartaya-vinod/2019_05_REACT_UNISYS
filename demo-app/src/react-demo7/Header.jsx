import React from 'react';
import { observer } from 'mobx-react';
import { inject } from 'mobx-react';

const Header = ({ expStore }) => (
    <div>
        <h3>There are {expStore.expenseCount} expenses for this month.</h3>
    </div>
);

export default inject('expStore')(observer(Header));