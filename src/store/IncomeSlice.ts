import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IIncome} from "../interfaces/Income/IIncome";
import {IIncomeState} from "../interfaces/Income/IIncomeState";
const initialState: IIncomeState = {
    incomes: [],
};

const incomeSlice = createSlice({
    name: 'incomes',
    initialState,
    reducers: {
        addIncome: (state, action: PayloadAction<IIncome>) => {
            state.incomes.push(action.payload);
        },
    },
});

export const { addIncome }= incomeSlice.actions;
export default incomeSlice.reducer;
