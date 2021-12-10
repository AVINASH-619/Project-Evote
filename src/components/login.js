import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  const [person, setPerson] = useState({ email: '', password: '' });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.email && person.password) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      console.log(person)
      setPerson({ email: '', password: '' });
    }
  };
  return (
    <>
      <form >
        <div className="row">
          <div className="col-sm-2 col-md-3 col-lg-4"></div>
          <h1 className="text-center col-sm-8 col-md-6 col-lg-5 m-3">Create A New Poll</h1>
        </div>
        <div className="row">
          <div className="col-sm-2 col-md-3 col-lg-4"></div>
          <input className="col-sm-8 col-md-6 col-lg-5 m-3 p-3" type="text" id='email'
            name='email'
            placeholder="Email"
            value={person.email}
            onChange={handleChange}></input>
        </div>
        <div className="row">
          <div className="col-sm-2 col-md-3 col-lg-4"></div>
          <input className="col-sm-8 col-md-6 col-lg-5 m-3 p-3" type='password'
            id='password'
            name='password'
            placeholder="password"
            value={person.password}
            onChange={handleChange}></input>
        </div>
        <div className="row">
          <div className="col-sm-2 col-md-3 col-lg-4"></div>
          <div className="text-center col-sm-8 col-md-6 col-lg-5 m-1">
            <button className="submit p-2 btn-primary" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </form>
       
      <div className="row">
        <div className="col-sm-2 col-md-3 col-lg-4"></div>
        <div className="text-center col-sm-8 col-md-6 col-lg-5 m-1">
          <h3>New user?</h3>
          <Link to='/signup'>
            <button className="submit p-2 btn-primary">SignUp</button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Login


