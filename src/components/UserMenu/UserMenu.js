import { useDispatch, useSelector } from 'react-redux';
import * as authSelector from 'redux/auth/auth-selectors';
import * as authOperations from 'redux/auth/auth-operations';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getUsername);

  return (
    <div>
      <span>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}

export default UserMenu;
