import React from 'react';
import {useSelector} from "react-redux";
import {IIncome} from "../../interfaces/Income/IIncome";
import {Card, Grid} from "@mui/material";


export const IncomesList: React.FC = () => {
    const incomes = useSelector((state: any) => state.incomes.incomes);
    return (
        <div className="mt-2 p-3">
            <h2>Incomes</h2>
            <Grid container className="border-bottom-1">
                {incomes.map((income: IIncome) => (
                    <Grid item xs={4} key={income.id}>
                        <Card className="p-3" variant="outlined">
                            <h4>{income.source}</h4>
                            <p>{income.amount}</p>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
