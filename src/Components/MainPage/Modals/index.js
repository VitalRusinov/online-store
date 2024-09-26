import ProductCard from './ProductCard/ProductCard.jsx';
import Auth from './Auth/Auth.jsx';
import SignUp from './Auth/SignUp/SignUp';

const modals = {
  productCard: ProductCard,
  auth: Auth,
  signUp: SignUp,
};

export default (modalName) => modals[modalName];
