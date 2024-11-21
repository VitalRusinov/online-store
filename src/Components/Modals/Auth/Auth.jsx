import { getUserData } from '../../../utils';
import Login from './Login/Login';
import UserInfo from './UserInfo/UserInfo';

const Auth = () => {
  const userData = getUserData();

  return userData.auth ? <UserInfo /> : <Login />;
};

export default Auth;
