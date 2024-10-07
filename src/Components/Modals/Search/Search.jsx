import { useNavigate } from 'react-router-dom';
import { pages } from '../../../utils';
import SearchForm from './SearchForm/SearchForm';

const Search = () => {
  const navigate = useNavigate();

  const handleSubmit = (str) => {
    navigate(pages.search, { state: str }); // Переходим на страницу Search с состоянием
  }

  return (
    <SearchForm submit={handleSubmit}/>
  )
};

export default Search;