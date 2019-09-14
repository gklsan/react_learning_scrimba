import React from 'react';
import TodoItem from "./TodoItem";
import todosData from "../datas/todosData";

function MainContent() {
    // const todoSorted = todosData.sort((a, b) => a.completed - b.completed); // Sorting based on completed
    const todoItemComponents = todosData.map(function (todo) {
        return <TodoItem key={todo.id} todo={todo}/>
    });
    return(
        <div className="c-todo_list">
            { todoItemComponents }
        </div>
    )
}

export default MainContent;
