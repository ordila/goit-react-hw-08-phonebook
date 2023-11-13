import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

const ContactForm = ({ onAdd, onCheckUnique }) => {
  const dispatch = useDispatch();

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
    <form onSubmit={handleFormSubmit}>
      <input type="text" required name="name" />
      <input type="tel" required name="phone" onChange={formatPhoneNumber} />
      <button type="submit">Додати</button>
    </form>
  );
};

export default ContactForm;
