import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setBudget} from "../../../store/budgetSlice";
import {CategorySelect} from "../../Category/Categories";
import {IState} from "../../../interfaces/state/state";
import {Button, FormControl, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";

const SetBudgetForm: React.FC = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('');
    const [budget, setBudgetAmount] = useState(0);
    const categories = useSelector((state: IState) => state.categories.categories);

    const handleFormSubmit = (event: React.FormEvent) :void => {
        event.preventDefault();
        dispatch(setBudget({ category, budget}));
        setBudgetAmount(0);
        setCategory('');
    };

    const handleCategorySelect = (category: string) :void => {
        setCategory(category);
    };

    return (
        <form className="my-5 d-flex justify-content-center border-bottom p-2" onSubmit={handleFormSubmit}>
                <CategorySelect categories={categories} onSelectCategory={handleCategorySelect} selectedCategory={category} />
                <FormControl className="m-2">
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                        value={budget}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setBudgetAmount(Number(e.target.value))}
                    />
                </FormControl>
            <Button disabled={!budget || !category} className="m-3 py-0 submit-btn" type="submit" variant="contained">Set Budget</Button>
        </form>
    );
};

export default SetBudgetForm;
