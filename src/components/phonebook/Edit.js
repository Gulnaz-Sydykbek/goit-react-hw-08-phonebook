import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RiSave3Line } from 'react-icons/ri';
import { phonebookOperations } from 'redux/phonebook';
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
    dispatch(phonebookOperations.updateContacts(id, item));
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

      <button
        className={s.editBbutton}
        type="button"
        onClick={() => onUpdateContact(id, edit)}
      >
        <RiSave3Line />
      </button>
    </div>
  );
}

export default Edit;
