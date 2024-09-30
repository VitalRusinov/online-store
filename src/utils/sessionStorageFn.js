import _ from "lodash";

const defaultIdentifier = 'elfenLied';

const getUserData = (identifier = defaultIdentifier) => {
  const userData = sessionStorage.getItem(identifier);
  if (!userData) {
    const email = _.uniqueId('guest_');
    const guestData = {email, password: '', auth: false, likes: [], basket: {}};
    setUserData(guestData);
    return guestData;
  }
  return JSON.parse(userData);
}

const setUserData = (data, identifier = defaultIdentifier) => (
  sessionStorage.setItem(identifier, JSON.stringify(data)));

const removeUserData = (identifier = defaultIdentifier) => {
  sessionStorage.removeItem(identifier);
  const email = _.uniqueId('guest_');
  setUserData({email, password: '', auth: false, likes: [], basket: {}});
};

export { getUserData, setUserData, removeUserData };
