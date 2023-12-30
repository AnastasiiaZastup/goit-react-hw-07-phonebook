import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item, ButtonList } from './ContactList.styled';
import { deleteContact, fetchContacts } from 'backoption/operations';

import {
  selectContacts,
  selectError,
  selectFilter,
  selectVisible,
} from '../../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);
  const visib = useSelector(selectVisible);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getContacts = () => {
    return visib;
  };

  const filteredContacts = getContacts();

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {filteredContacts.map(contact => {
          const { id, name, number } = contact;

          return (
            <Item key={id}>
              <p>{name}:</p>
              <p>{number}</p>
              <ButtonList onClick={() => dispatch(deleteContact({ id }))}>
                Delete
              </ButtonList>
            </Item>
          );
        })}
      </ul>
    </div>
  );
};
