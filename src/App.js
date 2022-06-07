import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Food",
        amount: 194.42,
        date: new Date(2022, 5, 22),
    },
    {
        id: "e2",
        title: "Fuel",
        amount: 99.82,
        date: new Date(2021, 4, 16),
    },
    {
        id: "e3",
        title: "Rent",
        amount: 294.67,
        date: new Date(2020, 8, 31),
    },
    {
        id: "e4",
        title: "New Monitor",
        amount: 450,
        date: new Date(2021, 7, 11),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
