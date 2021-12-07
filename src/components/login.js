import React, { useState } from 'react';
const Login=()=>{
  const [person, setPerson] = useState({email:'', password:''});
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]:value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.email && person.password) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({email: '', password: '' });
    }
  };
  return (
    <>
        <form > 
          <div className='m-3'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='m-3'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={person.password}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn btn-success text-white m-2' onClick={handleSubmit}>
            Login
          </button>
        </form>
        <h3>New user?</h3>
          );
    </>
  )
}
export default Login


