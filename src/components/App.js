import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AppBar from './UserMenu/AppBar';

import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import Container from './container/Container';
import ContactList from './phonebook/ContactList';
import ContactForm from './phonebook/ContactForm';
import Filter from './phonebook/Filter';
import * as authOperations from 'redux/auth/auth-operations';
import * as authSelectors from 'redux/auth/auth-selectors';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getisFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" redirectTo="/phonebook" restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/phonebook" redirectTo="/login">
            <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </PrivateRoute>

          <Redirect to="/" />
        </Switch>

        <ToastContainer autoClose={3000} />
      </Container>
    )
  );
}

export default App;
