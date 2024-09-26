import { getStorageItem } from '../../../../utils';
import Login from './Login/Login';
import UserInfo from './UserInfo/UserInfo';

const Auth = ({openModal, closeModal}) => {
  const userData = JSON.parse(getStorageItem());

  return (
    userData.auth ? 
    <UserInfo openModal={openModal} closeModal={closeModal}/>
    : <Login openModal={openModal} closeModal={closeModal}/>
  )
}

export default Auth;
