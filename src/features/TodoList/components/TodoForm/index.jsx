import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// import InputField from '../../../../components/form-controls/InputField';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  //   const [value, setValue] = useState('');

  //   function handleSubmit(e) {
  //     e.preventDefault();

  //     const formValues = {
  //       title: value,
  //     };

  //     if (!onSubmit || formValues.title === '') {
  //       return;
  //     }
  //     onSubmit(formValues);
  //     setValue('');
  //   }

  //   function handleValueChange(e) {
  //     const value = e.target.value;
  //     setValue(value);
  //   }

  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'Title is too short'),
  });

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  function handleSubmit(values) {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  }

  return (
    // <form onSubmit={handleSubmit}>
    //     <input
    //         type="text"
    //         value={value}
    //         onChange={handleValueChange}
    //     />
    // </form>
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
