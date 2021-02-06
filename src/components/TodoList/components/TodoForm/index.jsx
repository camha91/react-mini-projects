import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm({ onSubmit }) {
    const [value, setValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const formValues = {
            title: value,
        }

        if (!onSubmit || formValues.title === '') {
            return;
        }
        onSubmit(formValues);
        setValue('');
    };

    function handleValueChange(e) {
        const value = e.target.value;
        setValue(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={handleValueChange}
            />
        </form>
    );
}

export default TodoForm;