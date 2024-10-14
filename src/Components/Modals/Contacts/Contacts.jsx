import { useContext, useEffect } from "react";
import styles from "./Contacts.module.scss";
import { useFormik } from "formik";
import YandexMap from "./YandexMap/YandexMap";
import ModalContext from "../../../context/ModalContext";

const Contacts = () => {
  const { closeModal } = useContext(ModalContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Инициализация useFormik
  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log("Сообщение от клиента:", values);
    },
  });

  return (
    <div className={styles.main_containers}>
      <div className={styles.container}>
        <button className={styles.closeButton} onClick={closeModal}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2"
              y1="2"
              x2="16"
              y2="16"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="2"
              y1="16"
              x2="16"
              y2="2"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 22"
                  fill="none"
                >
                  <path d="M7 20L13 14H9V0H5V14H1L7 20Z" fill="white" />
                </svg>
              </div>
            </div>
            <div className={styles.phone}>
              <div className={styles.title}>Телефон</div>
              <div className={styles.number}>+7 (495) 621-26-17</div>
              <div className={styles.text}>Ответим на все вопросы</div>
              <div className={styles.icons}>
                <div className={styles.icon}>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6993 4.65152L16.0586 17.1046C15.8593 17.9834 15.3399 18.2021 14.6018 17.7884L10.578 14.8234L8.63675 16.6909C8.42175 16.9059 8.24237 17.0853 7.828 17.0853L8.11737 12.9878L15.5743 6.24964C15.8986 5.96089 15.5036 5.80027 15.0705 6.08964L5.85175 11.8946L1.883 10.6521C1.01987 10.3828 1.00425 9.78902 2.063 9.37464L17.5861 3.39402C18.3049 3.12464 18.9336 3.55402 18.6993 4.65214V4.65152Z"
                      fill="#AE97E8"
                    />
                  </svg>
                </div>
                <div className={styles.icon}>
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.001 2.22322C15.4126 2.46376 14.7805 2.62629 14.116 2.69975C14.8016 2.32125 15.3146 1.72555 15.5592 1.02378C14.915 1.37678 14.21 1.62525 13.4748 1.7584C12.9804 1.27138 12.3255 0.948578 11.6119 0.840106C10.8982 0.731635 10.1658 0.843563 9.52814 1.15851C8.89052 1.47347 8.38345 1.97382 8.08564 2.58189C7.78784 3.18996 7.71597 3.87173 7.88118 4.52135C6.57593 4.46089 5.29905 4.14789 4.1334 3.60269C2.96775 3.05748 1.93938 2.29224 1.11504 1.35663C0.833179 1.80521 0.671108 2.32529 0.671108 2.87918C0.670793 3.37781 0.803889 3.8688 1.05859 4.30859C1.31328 4.74838 1.6817 5.12337 2.13116 5.40029C1.60991 5.38499 1.10016 5.25505 0.644331 5.02128V5.06029C0.644278 5.75963 0.906487 6.43746 1.38647 6.97875C1.86645 7.52004 2.53463 7.89145 3.27764 8.02997C2.79409 8.15071 2.28713 8.16849 1.79504 8.08198C2.00467 8.68373 2.41302 9.20993 2.96292 9.58693C3.51282 9.96392 4.17673 10.1728 4.86172 10.1844C3.69891 11.0266 2.26285 11.4834 0.784558 11.4814C0.522693 11.4815 0.26105 11.4673 0.000976562 11.4391C1.50153 12.3292 3.24829 12.8016 5.03225 12.7998C11.0712 12.7998 14.3725 8.18535 14.3725 4.18329C14.3725 4.05327 14.369 3.92195 14.3626 3.79193C15.0048 3.36349 15.5591 2.83296 15.9996 2.22517L16.001 2.22322Z"
                      fill="#AE97E8"
                    />
                  </svg>
                </div>
                <div className={styles.icon}>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64977 16.5498H0.384461V6.03443H3.64977V16.5498ZM2.01515 4.60005C0.971148 4.60005 0.124023 3.73493 0.124023 2.69093C0.124023 2.18937 0.323266 1.70836 0.677921 1.3537C1.03258 0.999048 1.51359 0.799805 2.01515 0.799805C2.51671 0.799805 2.99772 0.999048 3.35238 1.3537C3.70703 1.70836 3.90627 2.18937 3.90627 2.69093C3.90627 3.73493 3.05915 4.60005 2.01515 4.60005ZM15.8706 16.5498H12.6126V11.4311C12.6126 10.211 12.5879 8.64668 10.915 8.64668C9.2174 8.64668 8.95696 9.97193 8.95696 11.3433V16.5498H5.69502V6.03443H8.82646V7.4688H8.87202C9.30796 6.64249 10.3728 5.77062 11.9613 5.77062C15.266 5.77062 15.8735 7.94693 15.8735 10.7735V16.5498H15.8706Z"
                      fill="#AE97E8"
                    />
                  </svg>
                </div>
                <div className={styles.icon}>
                  <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.02269 9.82524L9.47877 6.66408H6.6258V4.61359C6.6258 3.74876 7.02441 2.90485 8.30222 2.90485H9.59932V0.213592C9.59932 0.213592 8.42217 0 7.29665 0C4.94697 0 3.41119 1.51394 3.41119 4.25476V6.66408H0.799316V9.82524H3.41119V17.4671C4.47625 17.6443 5.56074 17.6443 6.6258 17.4671V9.82524H9.02269Z"
                      fill="#AE97E8"
                    />
                  </svg>
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
          {/*возможно красивее будет заменить на googleMap*/}
          <YandexMap />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
