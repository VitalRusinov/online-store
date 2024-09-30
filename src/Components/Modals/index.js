import ProductCard from './ProductCard/ProductCard.jsx';
import Auth from './Auth/Auth.jsx';
import SignUp from './Auth/SignUp/SignUp';
import Liked from './Liked/Liked';
import Basket from './Basket/Basket';

const modals = {
  productCard: ProductCard,
  auth: Auth,
  signUp: SignUp,
  liked: Liked,
  basket: Basket
};

export default (modalName) => modals[modalName];
