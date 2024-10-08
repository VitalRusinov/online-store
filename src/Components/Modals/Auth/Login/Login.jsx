import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import ModalContext from '../../../../context/ModalContext';
import styles from './Login.module.scss';
import EnterButton from './EnterButton/EnterButton';
import { setUserData } from '../../../../utils';
import ModalTypes from '../../modalTypes';
import { addNewUserBasket } from '../../../../store/basketsSlice';

// Схема валидации с использованием Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Некорректный e-mail')
    .required('Поле обязательно')
    .trim(),
  password: Yup.string()
    .min(6, 'Минимальная длина - 6 символов')
    .required('Поле обязательно'),
});

const Login = () => {
  const dispatch = useDispatch();

  const { openModal, closeModal } = useContext(ModalContext);

  const [loginError, setLoginError] = useState(null);

  const users = useSelector((state) => state.users.entries);

  // Начальные значения полей формы
  const initialValues = {
    email: '',
    password: '',
  };

  // Функция, вызываемая при отправке формы
  const handleSubmit = (values) => {
    const user = users.find(u => u.email === values.email);
    if(!user) {
      setLoginError('Данный пользователь не зарегистрирован');
      return;
    }
    if (user.password !== values.password) {
      setLoginError('Введен неверный пароль');
      return;
    }
    setLoginError(null);
    //Здесь не стал искать предыдущий выбор пользователя, т.к. это все не сохраняется на сервере
    setUserData({...user, auth: true, likes: [], basket: {}});
    dispatch(addNewUserBasket());
    openModal(ModalTypes.auth);
  };

  return (
    <div className={styles.loginForm}>
      <h2>Вход</h2>
      <button 
        className={styles.closeButton}
        onClick={closeModal}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <line x1="2" y1="2" x2="16" y2="16" stroke="white" strokeWidth="2"/>
          <line x1="2" y1="16" x2="16" y2="2" stroke="white" strokeWidth="2"/>
        </svg>
      </button>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form className={styles.form}>
            <div>
              <label htmlFor="email"></label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="e-mail"
                className={styles.input}
              />
              <ErrorMessage 
                name="email" 
                component="div"
                className={styles.error}
              />
            </div>
            <div >
              <label htmlFor="password"></label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="пароль"
                className={styles.input}
              />
              <ErrorMessage 
                name="password" 
                component="div"
                className={styles.error}
              />
            </div>
            {loginError && <div className={styles.loginError}>{loginError}</div>}
            <EnterButton handleSubmit={handleSubmit} isSubmitting={isSubmitting}/>
          </Form>
        )}
      </Formik>
      <button
        className={styles.toRegistration}
        type="button"
        onClick={() => openModal(ModalTypes.signUp)}
        >
        <span>Нет аккаунта?</span>
        <span>Регистрация</span>
        <svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z" fill="white"/>
        </svg>
      </button>
    </div>
  );
};

export default Login;
