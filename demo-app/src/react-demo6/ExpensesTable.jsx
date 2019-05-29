import React from 'react';
import store from './ExpensesStore';
import {observer} from 'mobx-react';

const ExpensesTable = () => (
    <div>
        <h5>Here are your expenses details</h5>
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                    store.expenses.map(exp => (
                        <tr key={exp.description}>
                            <td>{exp.description}</td>
                            <td>{exp.amount}</td>
                        </tr>
                    ))
                }
            </tbody>
            <tfoot>
                <tr>
                    <th>Total expense: </th>
                    <th>{store.totalExpense}</th>
                </tr>
            </tfoot>
        </table>
    </div>
);
export default observer(ExpensesTable);