import axios from 'axios';
import * as actions from './phonebook-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchPhonebooks = () => dispatch => {
  dispatch(actions.fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch(error => dispatch(actions.fetchContactError(error)));
};

export const addContacts = phoneList => dispatch => {
  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', phoneList)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export const deleteContacts = contactId => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`./contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

export const updateContacts = (id, data) => dispatch => {
  dispatch(actions.updateContactRequest());

  axios
    .patch(`/contacts/${id}`, data)
    .then(({ data }) => dispatch(actions.updateContactSuccess(data)))
    .catch(error => dispatch(actions.updateContactError(error.message)));
};
