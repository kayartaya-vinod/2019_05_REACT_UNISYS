import { types } from 'mobx-state-tree';

const Expense = types
    .model('Expense', {
        description: types.string,
        amount: types.number
    })
    .views(self => ({
        get formattedAmount() {
            return `Rs.${self.amount}`
        }
    }));

const ExpenseStore = types
    .model('ExpenseStore', {
        expenses: types.array(Expense)
    })
    .actions(self => ({
        addOrUpdateExpense(expense) {
            if (!expense.description) return;
            expense.amount = parseFloat(expense.amount);

            const index = self.expenses.findIndex(exp => exp.description === expense.description);
            if (index === -1) {
                self.expenses.push(expense);
            }
            else {
                self.expenses[index] = expense;
            }
        },
        deleteExpense(description) {
            const index = self.expenses.findIndex(exp => exp.description === description);
            if (index !== -1) {
                self.expenses.splice(index, 1);
            }
        }
    }))
    .views(self => ({
        get totalExpense() {
            if (self.expenses.length === 0) return 0;
            return self.expenses.map(e => e.amount).reduce((a, c) => a + c);
        },
        get totalExpenseFormatted() {
            if (self.expenses.length === 0) return 0;
            return 'Rs.' + self.expenses.map(e => e.amount).reduce((a, c) => a + c);
        },
        get expenseCount() {
            return self.expenses.length;
        }
    }));

export default ExpenseStore.create(); // singleton, used by all components