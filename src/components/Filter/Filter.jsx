import React from 'react';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const inputHandleChacge = evt => {
    dispatch(setFilter(evt.target.value));
  };
  return (
    <>
      <h2>Find contact by name</h2>
      <label htmlFor="filter">
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={inputHandleChacge}
        />
      </label>
    </>
  );
};

export default Filter;
