import React, { useState } from 'react';
import TodoFeature from './components/TodoFeature';
import TodoForm from './components/TodoForm';

function TodoListApp() {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: "Practice react hooks",
            completed: true
        }, {
            id: 2,
            title: "Practice scss",
            completed: true
        }, {
            id: 3,
            title: "Edit resume",
            completed: false
        }, {
            id: 4,
            title: "Practice interview",
            completed: true
        }, {
            id: 5,
            title: "Apply for front end engineer jobs",
            completed: false
        }
    ]);

    function handleOnTodoClick(todo) {
        const newTodoList = todoList.filter((x) => x.id !== todo.id);
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
