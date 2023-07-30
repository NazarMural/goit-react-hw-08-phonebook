import { useDispatch, useSelector } from 'react-redux';

import { getIsLoggedIn, getUser } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? (
        <div>
          <p>{user.name}</p>
          <button type="button" onClick={() => dispatch(logOut())}>
            <span>Logout</span>
          </button>
        </div>
      ) : (
        <AuthNavigation />
      )}
    </header>
  );
};
