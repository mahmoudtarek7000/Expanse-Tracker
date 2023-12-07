import React, {ChangeEvent, useState} from 'react';
import { useDispatch} from 'react-redux';
import { v4 as uuid } from 'uuid';
import {addIncome} from "../../../store/IncomeSlice";
import {Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";

const IncomeEntry: React.FC = () => {
    const [amount, setAmount] = useState('');
    const [source, setSource] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) :void => {
        e.preventDefault();
        if (amount && source) {
            const income = {
                id: uuid(),
                amount: parseFloat(amount),
                source
            };
            dispatch(addIncome(income));
            setAmount('');
            setSource('');
        }
    };

    return (
        <form className="border-bottom p-4" onSubmit={handleSubmit}>
            <FormControl className="m-2">
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Amount"
                    value={amount}
                    onChange={(e:ChangeEvent<HTMLInputElement> ) => setAmount(e.target.value)}
                />
            </FormControl>
            <TextField className="m-2"  label="Source" id="Source" value={source}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setSource(e.target.value)} />
            <Button disabled={!amount || !source } className="m-3" type="submit" variant="contained" color="success">Add Income</Button>
        </form>
    );
};

export default IncomeEntry;
