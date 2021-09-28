import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContacts } from 'redux/phonebook/phonebook-operations';
import { Button } from 'react-bootstrap';
import { RiSave3Line } from 'react-icons/ri';
import s from './Contacts.module.css';

function Edit(props) {
  const { name, number, id } = props;
  const dispatch = useDispatch();
  const [edit, setEdit] = useState({ name, number });

  const onChange = e => {
    setEdit(state => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onUpdateContact = (id, item) => {
    dispatch(updateContacts(id, item));
  };

  return (
    <div>
      <input
        className={s.editInput}
        type="text"
        name="name"
        value={edit.name}
        onChange={onChange}
      />

      <input
        className={s.editInput}
        type="text"
        name="number"
        value={edit.number}
        onChange={onChange}
      />

      <Button
        className={s.editBbutton}
        type="button"
        onClick={() => onUpdateContact(id, edit)}
      >
        <RiSave3Line />
      </Button>
    </div>
  );
}

export default Edit;
