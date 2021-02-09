import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoFeature from '../../components/TodoFeature';
import TodoForm from '../../components/TodoForm';

function ListPage() {
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
    ];

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodos);

    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);

        return params.status || 'all';
    });

    // Listen to location search ---> update state
    useEffect(() => {
        const params = queryString.parse(location.search);

        setFilteredStatus(params.status || 'all');
    }, [location.search]);


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
        // setFilteredStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    function handleShowCompletedClick() {
        // setFilteredStatus('completed');
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    function handleShowNewClick() {
        // setFilteredStatus('new');
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    // render if and only if todoList or filteredStatus change
    const renderedTodoList = useMemo(() => {
        return todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    }, [todoList, filteredStatus]);

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

export default ListPage;
