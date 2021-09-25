import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from './Navigation/Navigation';
import HomeView from '../views/HomeView';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';

import Container from './container/Container';
import ContactList from './phonebook/ContactList';
import ContactForm from './phonebook/ContactForm';
import Filter from './phonebook/Filter';

function App() {
  return (
    <Container>
      <Navigation />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/phonebook">
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Route>
      </Switch>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
