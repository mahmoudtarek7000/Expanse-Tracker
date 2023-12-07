import * as React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {ExpenseList} from "./components/Expanses/ExpansesList/expansesList";
import SetBudgetForm from "./components/Budget/setBudget/setBudget";
import {IncomesList} from "./components/Income/IncomesList";
import ExpenseEntry from "./components/Expanses/ExpanseEntry/ExpanseEntry";
import IncomeEntry from "./components/Income/IncomeEntry/IncomeEntry";



function App() {
  return (
    <div className="App">
      <ExpenseEntry />
        <SetBudgetForm />
        <IncomeEntry />
        <ExpenseList />
      <IncomesList />
    </div>
  );
}

export default App;
