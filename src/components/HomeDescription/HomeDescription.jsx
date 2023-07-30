import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { Section } from 'components/Section/Section';
import { NavLink } from 'react-router-dom';

export const HomeDescription = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
      <div>
        <Section title={'Welcome to Phonebook'}>
          <p>
            Where All Your Contacts Are Safe and Sound
            <br />
            We're thrilled to have you here! At ContactKeepers, we understand
            the value of your phone contacts – they're not just numbers; they're
            the connections that make your world go 'round.
          </p>
          {!isLoggedIn && (
            <>
              <p>Join Us Today!</p>
              <div>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Log In</NavLink>
              </div>
            </>
          )}
        </Section>
      </div>
    </div>
  );
};
