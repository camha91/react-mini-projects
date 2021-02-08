import React, { useState } from 'react';
import TodoFeature from './components/TodoFeature';
import TodoForm from './components/TodoForm';

function TodoListApp() {
    const initTodos = [
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
            status: 'new'
        }, {
            id: 5,
            title: "Apply for front end engineer jobs",
            status: 'new'
        }
    ]
    const [todoList, setTodoList] = useState(initTodos);
    const [filteredStatus, setFilteredStatus] = useState('all');


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

    function handleShowAllClick() {
        setFilteredStatus('all');
    };

    function handleShowCompletedClick() {
        setFilteredStatus('completed');
    };

    function handleShowNewClick() {
        setFilteredStatus('new');
    };

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);

    return (
        <div className="todo-list-app">
            <h1>React Hook: TodoList</h1>

            <TodoForm onSubmit={handleOnFormSubmit} />

            <TodoFeature
                todos={renderedTodoList}
                onTodoClick={handleOnTodoClick}
            />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    )
}

export default TodoListApp;
