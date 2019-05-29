import React from 'react';
import { observer, inject } from 'mobx-react';

const ExpensesTable = ({expStore}) => (
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
                    expStore.expenses.map(exp => (
                        <tr key={exp.description}>
                            <td>{exp.description}</td>
                            <td>{exp.formattedAmount}</td>
                            <td>
                                <button className="btn btn-danger"
                                    onClick={() => {
                                        expStore.deleteExpense(exp.description);
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
                    <th>{expStore.totalExpenseFormatted}</th>
                </tr>
            </tfoot>
        </table>
    </div>
);
export default inject('expStore')(observer(ExpensesTable));