import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICategory} from "../interfaces/Category/ICategory";
import {ICategoryState} from "../interfaces/Category/ICategoryState";

const initialState: ICategoryState = {
    categories: [
        { id: '1', name: 'Groceries' },
        { id: '2', name: 'Transportation' },
    ],
};

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<ICategory>) => {
            state.categories.push(action.payload);
        },
    },
});
export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
