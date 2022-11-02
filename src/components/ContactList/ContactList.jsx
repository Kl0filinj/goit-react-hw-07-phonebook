import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoadingState, selectVisibleList } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingState);
  const visibleList = useSelector(selectVisibleList);
  return (
    <ul>
      {visibleList.length === 0 && !isLoading ? (
        <h2>It`s empty here ^_^</h2>
      ) : (
        visibleList.map(({ id, name, phone }) => (
          <li key={id}>
            <span>{name} || </span>
            <span> {phone}</span>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              style={{ margin: 10 + 'px' }}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default ContactList;
