import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../../../store/usersSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from './SignUp.module.scss';
import RegistrationButton from './RegistrationButton/RegistrationButton';
import { setUserData } from '../../../../utils';
import ModalTypes from '../../modalTypes';
import ModalContext from '../../../../context/ModalContext';
import { addNewUserBasket } from '../../../../store/basketsSlice';

import { ReactComponent as CloseButton } from '../../../../assets/svg/CloseButton.svg';
import { ReactComponent as LeftArrow } from '../../../../assets/svg/LeftArrow.svg';

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

const SignUp = () => {
  const { openModal, closeModal } = useContext(ModalContext);

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
    const user = users.find((u) => u.email === values.email);
    if (user) {
      setSignUpError('Данный пользователь уже зарегистрирован');
      return;
    }
    setSignUpError(null);
    const { confirmPassword, ...newUser } = values;
    dispatch(addUser(newUser));
    setUserData({ ...newUser, ...{ auth: true, likes: [], basket: {} } });
    dispatch(addNewUserBasket());
    openModal(ModalTypes.auth);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h2>Регистрация</h2>
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
              {signUpError && (
                <div className={styles.signUpError}>{signUpError}</div>
              )}
              <RegistrationButton
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </Form>
          )}
        </Formik>
        <button
          className={styles.toLogin}
          type="button"
          onClick={() => openModal(ModalTypes.auth)}
        >
          <LeftArrow />
          <span>Вход</span>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
