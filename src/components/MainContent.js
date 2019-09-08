import React from 'react';
import TodoItem from "./TodoItem";

function MainContent() {
    let inputs = [
        {
            content: 'This is the first content'
        },
        {
            content: "This is the second content"
        },
        {
            content: "This is the third content"
        },
        {
            content: "This is the fourth content"
        },
        {
            content: "This is the fifth content"
        }
    ];
    return(
        <div className="c-todo_list">
            {
                inputs.map((value, index) => {
                    return <TodoItem key={index} content={value.content}/>
                })
            }
        </div>
    )
}

export default MainContent;
