import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'redux/operations';
import { selectError, selectLoadingState } from 'redux/selectors';

// const shortid = require('shortid');

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingState);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </>
  );
};

// export default App;
