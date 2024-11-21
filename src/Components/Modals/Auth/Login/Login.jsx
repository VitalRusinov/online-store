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

import { ReactComponent as CloseButton } from '../../../../assets/svg/CloseButton.svg';
import { ReactComponent as RightArrow } from '../../../../assets/svg/RightArrow.svg';

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
    const user = users.find((u) => u.email === values.email);
    if (!user) {
      setLoginError('Данный пользователь не зарегистрирован');
      return;
    }
    if (user.password !== values.password) {
      setLoginError('Введен неверный пароль');
      return;
    }
    setLoginError(null);
    //Здесь не стал искать предыдущий выбор пользователя, т.к. это все не сохраняется на сервере
    setUserData({ ...user, auth: true, likes: [], basket: {} });
    dispatch(addNewUserBasket());
    openModal(ModalTypes.auth);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h2>Вход</h2>
        <button className={styles.closeButton} onClick={closeModal}>
          <CloseButton />
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
              <div>
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
              {loginError && (
                <div className={styles.loginError}>{loginError}</div>
              )}
              <EnterButton
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
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
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default Login;
