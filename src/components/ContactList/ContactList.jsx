import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
// import { deleteTask } from 'redux/taskSlice';
// import PropTypes from 'prop-types';

const ContactList = () => {
  // const dispatch = useDispatch();

  const contactsList = useSelector(selectContacts);
  const filterQuery = useSelector(selectFilter);
  const visibleList = contactsList.filter(item =>
    item.name.toLowerCase().includes(filterQuery)
  );

  return (
    <ul>
      {visibleList.length !== 0 ? (
        visibleList.map(({ id, name, phone }) => (
          <li key={id}>
            <span>{name} || </span>
            <span> {phone}</span>
            <button
              type="button"
              // onClick={() => dispatch(deleteTask(id))}
              style={{ margin: 10 + 'px' }}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <h2>It`s empty here ^_^</h2>
      )}
    </ul>
  );
};

// ContactList.propTypes = {
//   contactsList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;
