import expenseReducer from "../../store/expansesSlice";
import budgetReducer from "../../store/budgetSlice";
import categoryReducer from "../../store/CategorySlice";
import incomeReducer from "../../store/IncomeSlice";
import {IExpenseState} from "../Expanses/IExpanseState";
import {IBudgetState} from "../Budget/IBudgetState";
import {ICategoryState} from "../Category/ICategoryState";
import {IIncomeState} from "../Income/IIncomeState";

export interface IState {
    expenses: IExpenseState,
    budget: IBudgetState,
    categories: ICategoryState,
    incomes: IIncomeState
}
