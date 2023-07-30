import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" title="Home">
        <span>Home</span>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <span>Contacts</span>
        </NavLink>
      )}
    </nav>
  );
};
