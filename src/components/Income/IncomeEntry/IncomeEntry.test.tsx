import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, Store, UnknownAction} from 'redux';
import IncomeEntry from './IncomeEntry';
import incomeReducer from "../../../store/IncomeSlice";
import {IState} from "../../../interfaces/state/state";

describe('IncomeEntry Component', () => {
    let store: Store<any, any, IState>;

    beforeEach(() => {
        store = createStore(incomeReducer);
    });

    it('dispatches addIncome action on form submit with valid inputs', () => {
        const { getByLabelText, getByText } = render(
            <Provider store={store}>
                <IncomeEntry />
            </Provider>
        );

        const amountInput = getByLabelText('Amount');
        const sourceInput = getByLabelText('Source');
        const addButton = getByText('Add Income');

        fireEvent.change(amountInput, { target: { value: '100' } });
        fireEvent.change(sourceInput, { target: { value: 'Salary' } });
        fireEvent.click(addButton);
        const currentState = store.getState();
        expect(currentState.incomes[0].amount).toBeDefined();
        expect(Array.isArray(currentState.incomes)).toBe(true);
        expect(currentState.incomes.length).toBe(1);
        expect(currentState.incomes[0].amount).toBe(100);
        expect(currentState.incomes[0].source).toBe('Salary');
    });

    it('does not dispatch addIncome action on form submit with invalid inputs', () => {
        const { getByText } = render(
            <Provider store={store}>
                <IncomeEntry />
            </Provider>
        );

        const addButton = getByText('Add Income');

        fireEvent.click(addButton);
        const currentState = store.getState();
        expect(currentState.incomes).toHaveLength(0);
    });
});
