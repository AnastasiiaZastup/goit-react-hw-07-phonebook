import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { FilterContact } from './FilterContact/FilterContact';
import { fetchContacts } from 'backoption/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { useEffect } from 'react';

export const App = () => {
  const contact = useSelector(selectContacts);
  const dispath = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatchEvent(fetchContacts());
  }, [dispath]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterContact />
      {isLoading && !error && <b>Loading...</b>}
      {contact.length > 0 && <ContactList />}
      <ContactList />
    </>
  );
};
