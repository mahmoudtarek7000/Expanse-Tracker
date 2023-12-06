import { IBudgetState } from "../interfaces/Budget/IBudgetState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBudget } from "../interfaces/Budget/IBudget";

const initialState: IBudgetState = {
    budgetCategory: {},
};

const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        setBudget: (state, action: PayloadAction<IBudget>) => {
                const { category, budget } = action.payload;
                state.budgetCategory[category] = budget;
        },
    },
});

export const { setBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
