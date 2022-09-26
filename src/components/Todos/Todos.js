import React, {useEffect, useState} from 'react';

import {todosService} from "../../services";
import {Todo} from "../Todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        todosService.getAll().then(value => setTodos(value.data))
    }, [])
    return (
        <div>
            {
                todos.map(todo => <Todo todo={todo} key={todo.id}/>)
            }
        </div>
    );
};

export {Todos};