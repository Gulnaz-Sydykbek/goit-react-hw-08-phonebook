import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs';
import { phonebookOperations, phonebookSelector } from 'redux/phonebook';
import Edit from './Edit';
import Loader from './Loader';
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
              <Edit name={name} number={number} id={id} />
            </span>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              <BsFillTrashFill />
            </Button>
          </li>
        ))}

      {loading && <Loader />}
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
