import ContactForm from 'components/Phonebook/ContactForm';
import Filter from 'components/Phonebook/Filter';
import ContactList from 'components/Phonebook/ContactList';

function PhonebookNav() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default PhonebookNav;
