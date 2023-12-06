import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expansesSlice";
import budgetReducer from "./budgetSlice";
import categoryReducer from "./CategorySlice";
import incomeReducer from "./IncomeSlice";
export default configureStore({
    reducer: {
        expenses: expenseReducer,
        budget: budgetReducer,
        categories: categoryReducer,
        incomes: incomeReducer
    }
});
