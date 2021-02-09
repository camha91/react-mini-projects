import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';


TodoFeature.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoFeature.defaultProps = {
    todos: [],
    onTodoClick: null,
}

function TodoFeature({ todos, onTodoClick }) {

    function handleTodoClick(todo, idx) {
        if (onTodoClick) {
            onTodoClick(todo, idx);
        }
    };

    return (
        <ul className="todo-list">
            {todos.map((todo, idx) => (
                <li
                    key={todo.id}
                    className={classnames({
                        'todo-item': true,
                        completed: todo.status === 'completed',
                    })}
                    onClick={() => handleTodoClick(todo, idx)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoFeature;
