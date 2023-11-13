import React from 'react';
import css from './Home.module.css';
import phone from './img/phone.webp';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className={css.greeting_page}>
      <div className={css.greeting}>Welcome to Phonebook</div>
      <Link className={css.greeting_btn} to="/login">
        Let`s start
      </Link>
      <motion.img
        className={css.img_phone}
        width="200px"
        alt="alt"
        src={phone}
        // initial ={}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          // repeatType: 'reverse',
        }}
      ></motion.img>
    </div>
  );
};

export default Home;
