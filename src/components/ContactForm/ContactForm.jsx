import React from 'react';
import css from './ContactForm.module.css';
import { Button } from '@mui/material';
const ContactForm = ({ onAdd, onCheckUnique }) => {
  const formatPhoneNumber = event => {
    const input = event.target;
    let value = input.value.replace(/\D/g, ''); // Remove non-digit characters

    if (value.length > 6) {
      value = `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5, 7)}`;
    }

    input.value = value;
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.phone.value;

    if (!name || !number) {
      alert('Заповніть усі поля');
      return false;
    }

    if (onCheckUnique(name)) {
      onAdd({ name, number });
    } else {
      alert('Контакт вже існує');
      return false;
    }
  };

  return (
    <>
      <form className={css.form_contacts} onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className={css.input}
          type="text"
          required
          name="name"
        />
        <label htmlFor="phone">Phone</label>

        <input
          className={css.input}
          type="tel"
          required
          name="phone"
          onChange={formatPhoneNumber}
        />
        <Button
          variant="outlined"
          className={css.button_logOut}
          sx={{ color: '#fff' }}
          type="submit"
        >
          Add contact
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
