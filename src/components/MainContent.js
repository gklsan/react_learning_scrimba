import React from 'react';
import TodoItem from "./TodoItem";

function MainContent() {
    return(
        <div className="c-todo_list">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    )
}

export default MainContent;
