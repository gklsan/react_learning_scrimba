import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import todosData from "../datas/todosData";

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: todosData
        }
        this.handleClickEvent = this.handleClickEvent.bind(this);
    }

    todoItemComponents() {
        return this.state.todoItems.map(item => <TodoItem key={item.id} todo={item} handleClickEvent={this.handleClickEvent}/>)
    }

    handleClickEvent(id, isChecked) {
        this.setState( prevState => {
            const updatedItems = prevState.todoItems.map(item => {
                if(item.id === id){
                    item.completed = isChecked
                }
                return item
            });
            return {todoItems: updatedItems};
        })
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
