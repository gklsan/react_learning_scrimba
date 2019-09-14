import React from 'react';

function TodoItem(props) {
    return (
        <div className="c-todo_item" style={{color: props.todo.completed ? 'lightgray' : 'green' }}>
            <input
                type="checkbox"
                checked={props.todo.completed}
                onChange={(event) => props.handleClickEvent(props.todo.id, event.target.checked)} />
            <p>{props.todo.text}</p>
        </div>
    )
}

export default TodoItem;
