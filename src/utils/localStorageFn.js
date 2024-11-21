const defaultIdentifier = 'elfenLied';

const getUserData = (identifier = defaultIdentifier) => {
  const userData = localStorage.getItem(identifier);
  if (!userData) {
    const guestData = {
      email: 'guest',
      password: '',
      auth: false,
      likes: [],
      basket: {},
    };
    setUserData(guestData);
    return guestData;
  }
  return JSON.parse(userData);
};

const setUserData = (data, identifier = defaultIdentifier) =>
  localStorage.setItem(identifier, JSON.stringify(data));

const removeUserData = (identifier = defaultIdentifier) => {
  localStorage.removeItem(identifier);
  setUserData({
    email: 'guest',
    password: '',
    auth: false,
    likes: [],
    basket: {},
  });
};

export { getUserData, setUserData, removeUserData };
