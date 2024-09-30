import { getUserData } from '../../../utils';
import Login from './Login/Login';
import UserInfo from './UserInfo/UserInfo';

const Auth = ({openModal, closeModal}) => {
  const userData = getUserData();

  return (
    userData.auth ? 
    <UserInfo openModal={openModal} closeModal={closeModal}/>
    : <Login openModal={openModal} closeModal={closeModal}/>
  )
}

export default Auth;
