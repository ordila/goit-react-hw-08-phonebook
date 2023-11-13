import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withAuthRedirect = Component => {
  const PrivateComponent = props => {
    const userData = useSelector(state => state.user.userData);
    console.log('userData', userData);

    return userData ? <Component {...props} /> : <Navigate to={'/login'} />;
  };
  return PrivateComponent;
};
export default withAuthRedirect;
