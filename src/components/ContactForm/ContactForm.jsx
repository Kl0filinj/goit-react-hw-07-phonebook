import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { addContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = Yup.object().shape({
  name: Yup.string().min(7).required(),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectContacts);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        const { name, number } = values;
        const isNameInContacts = tasks.find(
          item => item.name.toLowerCase() === name.toLowerCase()
        );
        if (isNameInContacts) {
          alert('Sorry >±< this contact already in list ⬇️');
          return;
        }
        dispatch(addContact({ name, number }));
        console.log({ name, number });
        console.log('name: ', name, ' | ', 'number: ', number);
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">
          Full Name
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          ></Field>
          <ErrorMessage name="name" component="div" />
        </label>
        <br />
        <label htmlFor="number">
          Number
          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          ></Field>
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
