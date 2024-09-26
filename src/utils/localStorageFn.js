import _ from "lodash";

const defaultIdentifier = 'elfenLied';

const getStorageItem = (identifier = defaultIdentifier) => localStorage.getItem(identifier);

const setStorageItem = (data, identifier = defaultIdentifier) => (
  localStorage.setItem(identifier, JSON.stringify(data)));

const removeStorageItem = (identifier = defaultIdentifier) => {
  localStorage.removeItem(identifier);
  const email = _.uniqueId('guest_');
  setStorageItem({email, password: '', auth: false});
};

export { getStorageItem, setStorageItem, removeStorageItem };
