import React from 'react';

function TodoItem(props) {
    return (
        <div className="c-todo_item">
            <input type="checkbox" />
            <p>{props.content}</p>
        </div>
    )
}

export default TodoItem;
