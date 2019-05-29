import { decorate, observable, action, computed } from 'mobx';

class ExpensesStore {

    // @observable
    expenses = [
        { description: 'Petrol', amount: 5000 },
        { description: 'Internet', amount: 1350 },
        { description: 'Electricity', amount: 3500 },
    ];

    // @action
    addOrUpdateExpense = (expense) => {
        if(!expense.description) return;
        expense.amount = parseFloat(expense.amount);
        
        const index = this.expenses.findIndex(exp => exp.description === expense.description);
        if (index === -1) {
            this.expenses.push(expense);
        }
        else {
            this.expenses[index] = expense;
        }
    }

    // @action
    deleteExpense = (description) => {
        const index = this.expenses.findIndex(exp => exp.description === description);
        if (index !== -1) {
            this.expenses.splice(index, 1);
        }
    }

    // @computed
    get totalExpense() {
        return this.expenses.map(e => e.amount).reduce((a, c) => a + c);
    }

    // @computed
    get expenseCount() {
        return this.expenses.length;
    }
}

// in TypeScript, this can be replaced by using decorators on the 
// respective members in the class itself
decorate(ExpensesStore, {
    expenses: observable,
    addOrUpdateExpense: action,
    deleteExpense: action,
    totalExpense: computed,
    expenseCount: computed,
});

export default new ExpensesStore(); // export a singleton store