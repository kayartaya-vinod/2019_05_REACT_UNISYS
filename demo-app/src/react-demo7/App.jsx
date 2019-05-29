import React, { Component } from 'react';
import { render } from 'react-dom';
import store from './ExpensesStore';
import { Provider } from 'mobx-react';
import Header from './Header';
import ExpensesTable from './ExpensesTable';
import ExpenseForm from './ExpenseForm';

class App extends Component {
    render() {
        console.log(this);
        return (
            <div className="container">
                <h1>React Mobx Demo</h1>
                <hr />
                <Header />
                <div className="row">
                    <div className="col">
                        <ExpensesTable />
                    </div>
                    <div className="col">
                        <ExpenseForm />
                    </div>
                </div>
            </div>
        );
    }
}

const Root = <Provider expStore={store}>
    <App />
</Provider>;

render(Root, document.getElementById('root'));