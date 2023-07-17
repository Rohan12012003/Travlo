import React, { useState } from 'react';
//import axios from 'axios';

function RegistrationPage(props) {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(event) {

    console.log("in handle submit function");
    event.preventDefault();
  
    if (!termsAccepted) {
      alert('Please accept the terms and conditions!');
      return;
    }
    
    if (userDetails.password !== userDetails.confirmPassword) {
      alert('Password and Confirm Password do not match!');
      return;
    }

    // Make the POST request to the server
   // axios.post('./.netlify/functions/Register', userDetails)

      

     fetch("/.netlify/functions/Register")
      .then(response => {
        // Handle the response from the server
        console.log(response.data); // Example: Log the response data
        // Perform any necessary actions after successful registration
        //localStorage.setItem('isRegistered', JSON.stringify(response.data.isRegistered));
        props.onRegistration();
        console.log("after");
        // Reset the form after successful registration
        setUserDetails({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      })
      .catch(error => {
        // Handle the error from the server
        console.error('Error registering user:', error);
        // Perform any necessary actions after failed registration
        // For example, display an error message to the user
      });
  }

  function handleCheckboxChange(event) {
    const { checked } = event.target;

    setTermsAccepted(checked);
  }

  return (
    <div className='registration-page col'>
      <h2 className='registration-title'>Start Your Journey Here</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='col-6 register-item'>Username:</label>
          <input
            className='col-6 register-item'
            type="text"
            value={userDetails.username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='col-6 register-item'>Email:</label>
          <input
            className='col-6 register-item'
            type="text"
            value={userDetails.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='col-6 register-item'>Password:</label>
          <input
            className='col-6 register-item'
            type="password"
            value={userDetails.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='col-6 register-item'>Confirm Password:</label>
          <input
            className='col-6 register-item'
            type="password"
            value={userDetails.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='registration-checkbox'>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={handleCheckboxChange}
            />
            I accept the Terms and Conditions
            </label>
            <ul>
                <li className='registration-terms'>By proceeding with the registration, you agree to abide by our terms and conditions, ensuring responsible and lawful use of our services.</li>
                <li className='registration-terms'>Before signing up, please take a moment to review and accept our terms and conditions, which govern your usage of our services and protect the rights of all users.</li>
            </ul>
          
        </div>
        <button 
        type="submit" 
        className='register-button btn btn-info btn-sm'
        >
        Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;
