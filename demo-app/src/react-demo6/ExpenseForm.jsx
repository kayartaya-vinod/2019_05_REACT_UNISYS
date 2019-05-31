import React, { Component } from 'react';
import { inject} from 'mobx-react';

class ExpenseForm extends Component {

    submitHandler = (evt) => {
        evt.preventDefault();
        let description = this.descriptionTf.value;
        let amount = this.amountTf.value;
        this.props.store.addOrUpdateExpense({ description, amount });
        this.descriptionTf.value = '';
        this.amountTf.value = '';
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} className="form">
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control"
                        id="description" autoFocus
                        ref={tf => this.descriptionTf = tf}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" className="form-control"
                        id="amount"
                        ref={tf => this.amountTf = tf} />
                </div>
                <button className="btn btn-outline-primary">Save data</button>
            </form>
        );
    }
}

export default inject('store')(ExpenseForm);