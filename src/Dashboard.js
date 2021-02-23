import React from "react";
import TodoApp from "./Todo";

const todoItems = [];
todoItems.push({ index: 1, value: "Learn react", done: false });
todoItems.push({ index: 2, value: "Go shopping", done: true });
todoItems.push({ index: 3, value: "Buy flowers", done: true });

const Dashboard = ({handleLogout}) => {
    return (
        <>
            <h1> Welcome ❄</h1>
            <TodoApp initItems={todoItems} />
            <button className="red-button" style={{ marginLeft: 750 }} onClick={handleLogout}> Logout </button>
        </>
    )
}

export default Dashboard;