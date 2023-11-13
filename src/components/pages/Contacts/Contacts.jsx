import withAuthRedirect from 'HOC/withAuthRedirect';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './Contacts.module.css';
import {
  selectContact,
  selectFilter,
  selectIsLoading,
  setFilter,
} from 'components/redux/contactsReducer';
import {
  deleteContactThunk,
  postContactsThunk,
  requestContactsThunk,
} from 'components/redux/thunk';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Contacts = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const getVisibleContacts = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts();

  const handleFilterChange = filter => dispatch(setFilter(filter));

  const handleCheckUniqueContact = name => {
    const isExistContact = !!contacts.find(contact => contact.name === name);
    isExistContact && alert('Contact is already exist');
    return !isExistContact;
  };

  const handleRempveContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const handleAddContact = newContact =>
    dispatch(postContactsThunk(newContact));

  useEffect(() => {
    dispatch(requestContactsThunk());
  }, [dispatch]);

  return (
    <div className={css.form_wrapper}>
      {!isLoading ? (
        <div className={css.in_wrapper}>
          <h2 className={css.subTitle}>CONTACT BOOK</h2>
          <ContactForm
            onAdd={handleAddContact}
            onCheckUnique={handleCheckUniqueContact}
          />

          <Filter filter={filter} onChange={handleFilterChange}></Filter>
          <h2 className={css.subTitle}>Contacts</h2>
          <ContactList
            contacts={visibleContacts}
            onRemove={handleRempveContact}
          />
        </div>
      ) : (
        <h1>DATA IS LOADING FROM SERVER...</h1>
      )}
    </div>
  );
};

export default withAuthRedirect(Contacts);
