import React from 'react';
import { observer } from 'mobx-react';
import { inject} from 'mobx-react';

const ExpensesTable = ({store}) => (
    <div>
        <h5>Here are your expenses details</h5>
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    store.expenses.map(exp => (
                        <tr key={exp.description}>
                            <td>{exp.description}</td>
                            <td>{exp.amount}</td>
                            <td>
                                <button className="btn btn-danger"
                                    onClick={() => {
                                        store.deleteExpense(exp.description);
                                    }}
                                >x</button>
                            </td>
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
export default inject('store')(observer(ExpensesTable));