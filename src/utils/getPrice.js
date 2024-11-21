import { getUserData } from './localStorageFn';

const sale = 0.2;

export const getPrice = (price) => {
  const userData = getUserData();
  return userData.auth ? price * (1 - sale) : price;
};
