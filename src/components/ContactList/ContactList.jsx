import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts, deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';

export function ContactList() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const { contactsItem, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contactsItem.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilterContact();

  return (
    <ul>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contactsItem.length > 0 ? (
        visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              <span>{name}: </span>
              <span>{number}</span>
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              <span>Delete</span>
            </button>
          </li>
        ))
      ) : (
        <li>Oops, contact list is empty. Add new contact</li>
      )}
    </ul>
  );
}
