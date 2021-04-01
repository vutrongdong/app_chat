import { useSelector } from 'react-redux';

const useSession = () => {
  const authReducer = useSelector(state => state.authReducer);

  return authReducer.user;
};

export default useSession;
