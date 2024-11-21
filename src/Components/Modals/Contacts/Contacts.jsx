import { useContext, useEffect } from 'react';
import styles from './Contacts.module.scss';
import { useFormik } from 'formik';
import YandexMap from './YandexMap/YandexMap';
import ModalContext from '../../../context/ModalContext';

import { ReactComponent as CloseButton } from '../../../assets/svg/CloseButton.svg';
import { ReactComponent as DownArrow } from '../../../assets/svg/DownArrow.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/svg/TelegramIcon.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/svg/TwitterIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/svg/LinkedinIcon.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/svg/FacebookIcon.svg';

const Contacts = () => {
  const { closeModal } = useContext(ModalContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Инициализация useFormik
  const formik = useFormik({
    initialValues: {
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log('Сообщение от клиента:', values);
    },
  });

  return (
    <div className={styles.main_containers}>
      <div className={styles.container}>
        <button className={styles.closeButton} onClick={closeModal}>
          <CloseButton />
        </button>
        <div className={styles.info}>
          <div className={styles.contacts}>
            <div className={styles.adress}>
              <div className={styles.title}>Адрес</div>
              <div className={styles.city}>Москва</div>
              <div className={styles.street}>
                Хохловский переулок д. 11, стр. 3
              </div>
              <div className={styles.toMap}>
                Адрес на карте
                <DownArrow />
              </div>
            </div>
            <div className={styles.phone}>
              <div className={styles.title}>Телефон</div>
              <div className={styles.number}>+7 (495) 621-26-17</div>
              <div className={styles.text}>Ответим на все вопросы</div>
              <div className={styles.icons}>
                <div className={styles.icon}>
                  <TelegramIcon />
                </div>
                <div className={styles.icon}>
                  <TwitterIcon />
                </div>
                <div className={styles.icon}>
                  <LinkedinIcon />
                </div>
                <div className={styles.icon}>
                  <FacebookIcon />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.feedback_form}>
            <div className={styles.title}>Форма обратной связи</div>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="email"></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e-mail"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className={styles.input}
                  required
                />
              </div>
              <div>
                <label htmlFor="message"></label>
                <input
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Сообщение"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  className={styles.input}
                  required
                />
              </div>
              <button className={styles.orderButton} type="submit">
                <div className={styles.ellipse}></div>
                <span>Отправить</span>
              </button>
            </form>
          </div>
        </div>
        <div className={styles.map}>
          <YandexMap />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
