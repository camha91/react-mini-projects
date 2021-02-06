import React from 'react';
import PropTypes from 'prop-types';

TodoFeature.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoFeature.defaultProps = {
    todos: [],
    onTodoClick: null,
}

function TodoFeature({ todos, onTodoClick }) {

    function handleTodoClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    };

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    onClick={() => handleTodoClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoFeature;
