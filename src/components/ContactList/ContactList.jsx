import { useSelector, useDispatch } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import css from './ContactList.module.css';

export const ContactList = () => {
  const data = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const onContactDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const createContactsMarkup = ({ id, name, phone }) => {
    return (
      <li key={id} className={css.listItem}>
        <span className={css.itemText}>
          <b>{name}</b>
        </span>
        <span className={css.phoneNumber}>
          <i>{phone}</i>
        </span>
        <button
          className={css.delBtn}
          type="button"
          onClick={() => onContactDelete(id)}
        >
          Delete
        </button>
      </li>
    );
  };

  if (filter) {
    return (
      <ul className={css.contactsList}>
        {data
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(el => {
            return createContactsMarkup(el);
          })}
      </ul>
    );
  }

  return (
    <ul className={css.contactsList}>
      {data.map(el => {
        return createContactsMarkup(el);
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//   data: PropTypes.array.isRequired,
//   filter: PropTypes.string.isRequired,
//   onContactDelete: PropTypes.func.isRequired,
// };
