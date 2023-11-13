import { Button } from '@mui/material';
import css from './ContactList.module.css';
const ContactListItem = ({ name, number, onRemove, id }) => {
  const handleRemoveClick = () => {
    onRemove(id);
  };
  return (
    <li className={css.contacts}>
      {name} : {number}{' '}
      <Button variant="outlined" onClick={handleRemoveClick}>
        Delete
      </Button>
    </li>
  );
};
const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};
export default ContactList;
