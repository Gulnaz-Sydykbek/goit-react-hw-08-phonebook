import { useState } from 'react';
import s from './Contacts.module.css';

function Edit(props) {
  const { name, number } = props;
  const [edit, setEdit] = useState({ name, number });

  const onChange = e => {
    setEdit(state => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
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
    </div>
  );
}

export default Edit;
