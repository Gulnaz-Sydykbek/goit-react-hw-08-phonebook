import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as phonebookActions from './phonebook-actions';

const entities = createReducer([], {
  [phonebookActions.fetchContactSuccess]: (_, { payload }) => payload,
  [phonebookActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [phonebookActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [phonebookActions.updateContactSuccess]: (state, { payload }) =>
    state.map(contact => (contact.id === payload.id ? payload : contact)),
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [phonebookActions.fetchContactRequest]: () => true,
  [phonebookActions.fetchContactSuccess]: () => false,
  [phonebookActions.fetchContactError]: () => false,

  [phonebookActions.addContactRequest]: () => true,
  [phonebookActions.addContactSuccess]: () => false,
  [phonebookActions.addContactError]: () => false,

  [phonebookActions.deleteContactRequest]: () => true,
  [phonebookActions.deleteContactSuccess]: () => false,
  [phonebookActions.deleteContactError]: () => false,

  [phonebookActions.updateContactRequest]: () => true,
  [phonebookActions.updateContactSuccess]: () => false,
  [phonebookActions.updateContactError]: () => false,
});

const error = createReducer(null, {
  [phonebookActions.fetchContactError]: (_, { payload }) => payload,
  [phonebookActions.fetchContactRequest]: () => null,

  [phonebookActions.addContactError]: (_, { payload }) => payload,
  [phonebookActions.addContactRequest]: () => null,

  [phonebookActions.deleteContactError]: (_, { payload }) => payload,
  [phonebookActions.deleteContactRequest]: () => null,

  [phonebookActions.updateContactError]: (_, { payload }) => payload,
  [phonebookActions.updateContactRequest]: () => null,
});

const phonebookReduser = combineReducers({
  entities,
  filter,
  isLoading,
  error,
});

export default phonebookReduser;
