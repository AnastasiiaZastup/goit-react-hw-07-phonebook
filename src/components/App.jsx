import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { FilterContact } from './FilterContact/FilterContact';
import { fetchContacts } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/selectors';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterContact />
      {isLoading && !error && <b>Loading...</b>}
      <ContactList />
    </>
  );
};
