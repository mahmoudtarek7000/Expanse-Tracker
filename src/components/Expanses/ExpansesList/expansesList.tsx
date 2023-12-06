import React from 'react';
import { useSelector } from 'react-redux';
import { ICategory } from '../../../interfaces/Category/ICategory';
import { Card, Grid } from '@mui/material';
import {IExpense} from "../../../interfaces/Expanses/IExpanse";
import {IState} from "../../../interfaces/state/state";

export const ExpenseList: React.FC = () => {
    const categorizedExpenses = useSelector((state: IState) => state.expenses.expenseCategory);
    const categories = useSelector((state: IState) => state.categories.categories);
    const categorizedBudgets = useSelector((state: IState) => state.budget.budgetCategory);

    return (
        <div className="mt-5 border-bottom">
            <h2>Expenses</h2>
            {categories && categories.length > 0 && categories.map((category: ICategory, i: number) => (
                <div className="border-bottom p-4" key={i}>
                    <div className="d-flex justify-content-start flex-column">
                    <h5 className="text-secondary">Category: {category.name}</h5>
                    <p>
                        Budget: {categorizedBudgets[category.name] ? categorizedBudgets[category.name] : 'Not set'}
                    </p>
                    </div>
                    <Grid container className="border-bottom-1">
                        {categorizedExpenses[category.name]?.map((expense: IExpense) => (
                            <Grid item xs={4} key={expense.id}>
                                <Card className="p-3" variant="outlined">
                                    <h6>Expense: {expense.amount}</h6>
                                    <p>Date: {expense.date}</p>
                                    { expense.notes &&
                                        <p>Notes: {expense.notes}</p>
                                    }
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ))}
        </div>
    );
};
