import React, { useState } from 'react';
import TodoFeature from './components/TodoFeature';
import TodoForm from './components/TodoForm';

function TodoListApp() {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: "Practice react hooks",
            status: 'completed'
        }, {
            id: 2,
            title: "Practice scss",
            status: 'new'
        }, {
            id: 3,
            title: "Edit resume",
            status: 'new'
        }, {
            id: 4,
            title: "Practice interview",
            completed: 'new'
        }, {
            id: 5,
            title: "Apply for front end engineer jobs",
            completed: 'new'
        }
    ]);

    function handleOnTodoClick(todo, idx) {
        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }

        setTodoList(newTodoList);
    };

    function handleOnFormSubmit(formValues) {
        const newTodo = {
            id: todoList.length + 1,
            ...formValues,
        };
        setTodoList([...todoList, newTodo]);
    };

    return (
        <div className="todo-list-app">
            <h1>React Hook: TodoList</h1>

            <TodoForm onSubmit={handleOnFormSubmit} />

            <TodoFeature
                todos={todoList}
                onTodoClick={handleOnTodoClick}
            />
        </div>
    )
}

export default TodoListApp;
