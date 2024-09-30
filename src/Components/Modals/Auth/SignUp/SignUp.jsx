import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../../../store/usersSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from './SignUp.module.scss';
import RegistrationButton from './RegistrationButton/RegistrationButton';
import { setUserData } from '../../../../utils';
import ModalTypes from '../../ModalTypes';

// Схема валидации с использованием Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Некорректный e-mail')
    .required('Поле обязательно')
    .trim(),
  password: Yup.string()
    .min(6, 'Минимальная длина - 6 символов')
    .required('Поле обязательно'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
    .required('required'),
});

const SignUp = ({openModal, closeModal}) => {

  const [signUpError, setSignUpError] = useState(null);

  const users = useSelector((state) => state.users.entries);
  const dispatch = useDispatch();
  // Начальные значения полей формы
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  // Функция, вызываемая при отправке формы
  const handleSubmit = (values) => {
    // console.log('Данные формы:', values);
    const user = users.find(u => u.email === values.email);
    if(user) {
      setSignUpError('Данный пользователь уже зарегистрирован');
      return;
    }
    setSignUpError(null);
    const { confirmPassword, ...newUser } = values;
    // console.log(newUser, 'signUp values');
    dispatch(addUser(newUser));
    setUserData({...newUser, ...{auth: true, likes: [], basket: []}});
    openModal(ModalTypes.auth);
  };

  // useEffect(() => {
  //   console.log(users, 'users from signUp')
  // }, [users])

  return (
    <div className={styles.loginForm}>
      <h2>Регистрация</h2>
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
            <div>
              <label htmlFor="confirmPassword"></label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="повторите пароль"
                className={styles.input}
              />
              <ErrorMessage 
                name="confirmPassword" 
                component="div"
                className={styles.error}
              />
            </div>
            {signUpError && <div className={styles.signUpError}>{signUpError}</div>}
            <RegistrationButton handleSubmit={handleSubmit} isSubmitting={isSubmitting}/>
          </Form>
        )}
      </Formik>
      <button
        className={styles.toLogin}
        type="button"
        onClick={() => openModal(ModalTypes.auth)}
        >
        <svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM42 7L1 7L1 9L42 9V7Z" fill="white"/>
        </svg>
        <span>Вход</span>
      </button>
    </div>
  );
};

export default SignUp;
