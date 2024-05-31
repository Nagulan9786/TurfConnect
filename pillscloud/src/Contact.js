import React, { useState } from 'react';
import './Contact.css'; 

const Contact= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleButtonClick = () => {
    if (name !== '' && email !== '' && query !== '' && phoneNumber!=='') {
      alert('Mail Sent Successfully');
    } else {
      alert('Kindly fill the requirements');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to send the contact details
    console.log('Contact Details:', {
      name,
      email,
      query,
      phoneNumber,
    });
    // Reset the form fields
    setName('');
    setEmail('');
    setQuery('');
    setPhoneNumber('');
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />


        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        
        <label htmlFor="query">Query:</label>
        <textarea
          id="query"
          value={query}
          onChange={handleQueryChange}
          required
        ></textarea>

        <button type="submit" onClick={handleButtonClick}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
