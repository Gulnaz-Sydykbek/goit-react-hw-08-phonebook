import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookOperations, phonebookSelector } from 'redux/phonebook';
import { Button } from 'react-bootstrap';
import s from './Contacts.module.css';

function ContactList() {
  const contacts = useSelector(phonebookSelector.getVisiblePhonbookList);
  const loading = useSelector(phonebookSelector.getLoading);
  const error = useSelector(phonebookSelector.getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.fetchPhonebooks());
  }, [dispatch]);

  const onDeleteContact = id =>
    dispatch(phonebookOperations.deleteContacts(id));

  const { item, itemContainer } = s;

  return (
    <ul className={itemContainer}>
      {error && <h2>{error}</h2>}
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <li className={item} key={id}>
            <span>
              {name}: {number}
            </span>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </li>
        ))}

      {loading && <h2>Loading...</h2>}
    </ul>
  );
}

ContactList.propTypes = {
  onRemoveContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
