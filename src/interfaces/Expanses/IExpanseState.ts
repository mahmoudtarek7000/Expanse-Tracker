import {IExpense} from "./IExpanse";

export interface IExpenseState {
    expenseCategory: Record<string, IExpense[]>;
}
