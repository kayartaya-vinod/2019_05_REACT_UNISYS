import React from 'react';
import { inject} from 'mobx-react';
import { observer } from 'mobx-react';

const Header = ({store}) => (
    <div>
        <h3>There are {store.expenseCount} expenses for this month.</h3>
    </div>
);

export default inject('store')(observer(Header));