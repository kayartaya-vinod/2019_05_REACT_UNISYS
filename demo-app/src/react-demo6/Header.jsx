import React from 'react';
import store from './ExpensesStore';
import { observer } from 'mobx-react';

const Header = () => (
    <div>
        <h3>There are {store.expenseCount} expenses for this month.</h3>
    </div>
);

export default observer(Header);