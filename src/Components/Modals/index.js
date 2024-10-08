import ProductCard from "./ProductCard/ProductCard.jsx";
import Auth from "./Auth/Auth.jsx";
import SignUp from "./Auth/SignUp/SignUp";
import Liked from "./Liked/Liked";
import Basket from "./Basket/Basket";
import Contacts from "./Contacts/Contacts";
import Search from "./Search/Search";

const modals = {
  productCard: ProductCard,
  auth: Auth,
  signUp: SignUp,
  liked: Liked,
  basket: Basket,
  contacts: Contacts,
  search: Search,
};

export default (modalName) => modals[modalName];
