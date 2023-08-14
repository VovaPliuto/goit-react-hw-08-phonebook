import { useSelector, useDispatch } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/operations';

import {
  StyledContactsList,
  ListItem,
  Text,
  Number,
  DeleteBtn,
} from './ContactList.styled';
// import css from './ContactList.module.css';

export const ContactList = () => {
  const data = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const onContactDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const createContactsMarkup = ({ id, name, number }) => {
    return (
      <ListItem key={id}>
        <Text>
          <b>{name}</b>
        </Text>
        <span>
          <Number>{number}</Number>
        </span>
        <DeleteBtn type="button" onClick={() => onContactDelete(id)}>
          Delete
        </DeleteBtn>
      </ListItem>
    );
  };

  if (filter) {
    return (
      <StyledContactsList>
        {data
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(el => {
            return createContactsMarkup(el);
          })}
      </StyledContactsList>
    );
  }

  return (
    <StyledContactsList>
      {data.map(el => {
        return createContactsMarkup(el);
      })}
    </StyledContactsList>
  );
};
