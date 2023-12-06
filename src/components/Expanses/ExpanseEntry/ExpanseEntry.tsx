import React, {ChangeEvent, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {addExpense} from "../../../store/expansesSlice";
import {CategorySelect} from "../../Category/Categories";
import {IState} from "../../../interfaces/state/state";
import {Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";

const ExpenseEntry: React.FC = () => {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [notes, setNotes] = useState('');

    const categories = useSelector((state: IState) => state.categories.categories);
    const dispatch = useDispatch();
    const handleSubmit = (e: React.FormEvent) :void => {
        e.preventDefault();
        if (amount && date && category) {
            const expense = {
                id: uuid(),
                amount: parseFloat(amount),
                date,
                category,
                notes,
            };

            dispatch(addExpense(expense));

            setAmount('');
            setDate('');
            setCategory('');
            setNotes('');
        }
    };
    const handleCategorySelect = (category: string) :void => {
        setCategory(category);
    };
    return (
        <form className="d-flex justify-content-center my-3 p-2 border-bottom flex-wrap" onSubmit={handleSubmit}>
            <FormControl sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Amount"
                    value={amount}
                    onChange={(e:ChangeEvent<HTMLInputElement> ) => setAmount(e.target.value)}
                />
            </FormControl>
            <input
                className="submit-btn m-3"
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e:ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
            />
            <CategorySelect categories={categories} onSelectCategory={handleCategorySelect} selectedCategory={category} />
            <TextField className="m-2"  label="Notes" id="Notes" value={notes}
                        onChange={(e:ChangeEvent<HTMLInputElement>) => setNotes(e.target.value)} />
            <Button disabled={!amount || !category || !date } className="submit-btn m-3" type="submit" variant="contained" color="error">Add Expense</Button>
        </form>
    );
};

export default ExpenseEntry;
