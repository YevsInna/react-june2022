import React from 'react';

const Todo = ({todo}) => {

    const {userId, id, title, completed} = todo;

    return (
        <div>
            <h3>User {todo.userId} todo {todo.id}</h3>
            <p>{todo.title} - {todo.completed.toString()}</p>
        </div>
    );
};

export {Todo};