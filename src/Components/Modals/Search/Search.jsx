import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { pages } from '../../../utils';
import SearchForm from './SearchForm/SearchForm';
import ModalContext from '../../../context/ModalContext';

const Search = () => {
  const navigate = useNavigate();
  const { closeModal } = useContext(ModalContext);

  const handleSubmit = (str) => {
    closeModal();
    navigate(pages.search, { state: str }); // Переходим на страницу Search с состоянием
  };

  return <SearchForm submit={handleSubmit} />;
};

export default Search;
