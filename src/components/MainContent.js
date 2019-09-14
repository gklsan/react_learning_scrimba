import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import todosData from "../datas/todosData";

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: todosData
        }
    }

    todoItemComponents() {
        return this.state.todoItems.map(item => <TodoItem key={item.id} todo={item} />)
    }

    render() {
        return (
            <div className="c-todo_list">
                {this.todoItemComponents()}
            </div>
        )
    }
}

export default MainContent;
