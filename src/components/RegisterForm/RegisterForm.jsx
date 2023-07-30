import { useDispatch, useSelector } from 'react-redux';

import { register } from 'redux/auth/auth-operations';
import { getError } from 'redux/auth/auth-selectors';
import { getNotification } from 'components/helped/getNotificatin';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;

    if (password.value.length < 7) {
      getNotification(
        `The password must be composed of at least 7 characters.`
      );
      return;
    }

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" min="6" />
        </label>
        <label>
          E-mail
          <input type="text" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign up</button>
      </form>
      {error?.response?.data?.name &&
        getNotification('This email is already registered')}
    </div>
  );
};
