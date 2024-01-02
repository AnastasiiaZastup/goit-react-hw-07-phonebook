import { useDispatch, useSelector } from 'react-redux';
import { Item, ButtonList } from './ContactList.styled';
import { deleteContact } from '../../redux/operations';
import { selectVisible } from '../../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisible);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => {
          const { id, name, number } = contact;

          return (
            <Item key={id}>
              <p>{name}:</p>
              <p>{number}</p>
              <ButtonList onClick={() => dispatch(deleteContact(id))}>
                Delete
              </ButtonList>
            </Item>
          );
        })}
      </ul>
    </div>
  );
};
