import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IExpense} from "../interfaces/Expanses/IExpanse";
import {IExpenseState} from "../interfaces/Expanses/IExpanseState";

const initialState: IExpenseState = {
    expenseCategory: {}
};

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<IExpense>) => {
            const { category } = action.payload;
            if (!state.expenseCategory[category]) {
                state.expenseCategory[category] = [];
            }
            state.expenseCategory[category].push(action.payload);
        },
    },
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
