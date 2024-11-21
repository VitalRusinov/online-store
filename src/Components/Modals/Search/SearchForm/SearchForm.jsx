import { useEffect, useRef, useState } from "react";
import styles from "./SearchForm.module.scss";

import { ReactComponent as Loupe } from '../../../../assets/svg/Loupe.svg';
import { ReactComponent as CloseButton } from '../../../../assets/svg/CloseButton.svg';

const SearchForm = ({ string = "", submit }) => {
  const [searchStr, setSearchStr] = useState(string);
  const inputRef = useRef(null); // Создаем реф для input

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
            <Loupe />
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
          <CloseButton />
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
