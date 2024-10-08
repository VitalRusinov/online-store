import { useEffect, useRef, useState } from "react";
import styles from "./SearchForm.module.scss";

const SearchForm = ({ string = "", submit }) => {
  const [searchStr, setSearchStr] = useState(string);
  const inputRef = useRef(null); // Создаем реф для input

  useEffect(() => {
    inputRef.current.focus(); // Устанавливаем фокус на input при открытии модального окна
  }, []); // Запускаем эффект при изменении состояния isOpen

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(searchStr);
  };

  const handleClear = () => {
    setSearchStr("");
    inputRef.current.focus();
  };

  return (
    <div className={styles.search}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <button className={styles.submitButton} type="submit">
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
                stroke="#D9FF5A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23 22L18 17"
                stroke="#D9FF5A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Поиск..."
            required
            value={searchStr}
            onChange={(e) => setSearchStr(e.target.value)}
            ref={inputRef} // Привязываем реф к input
          />
        </form>
        <button className={styles.clearButton} onClick={handleClear}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2"
              y1="2"
              x2="20"
              y2="20"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="2"
              y1="20"
              x2="20"
              y2="2"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
