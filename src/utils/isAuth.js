//еще не пригождался


import { useSelector, useDispatch } from 'react-redux';
import { getStorageItem } from "./localStorageFn";

//мб достаточно проверки name?
export const isAuth = () => {
  const userData = getStorageItem();
  if (userData) {
    const users = useSelector((state) => state.users.entries);
    const user = users.find((u) => u.email === userData.email)
    if (user?.email === userData?.email && user?.password === userData?.password) {
      return true;
    }
  }
  return false;
}