import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    xbox: '',
    playstation: '',
    pc: ''

  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Sign Up</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <h4 className="card-header">Game Console Platforms</h4>
               <input
                className="form-input"
                placeholder="Xbox Gamertag"
                name="xbox"
                type="xbox"
                id="xbox"
                value={formState.xbox}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Playstation Gamertag"
                name="playstation"
                type="playstation"
                id="playstation"
                value={formState.playstation}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="PC Gamertag"
                name="pc"
                type="pc"
                id="pc"
                value={formState.pc}
                onChange={handleChange}
              />
              
              {/* <select>
                <option  value={formState.xbox} onChange={handleChange}>Xbox</option >
                <option  value={formState.playstation} onChange={handleChange}>Play Station</option >
                <option  value={formState.pc} onChange={handleChange}>PC</option >
              </select> */}
    
              
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>

            {error && <div>Signup failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
