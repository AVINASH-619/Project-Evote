import React, { useState } from 'react';
const Signup = () => {
    const [person, setPerson] = useState({ firstname: '', lastname: '', email: '', password: '' });
    const [people, setPeople] = useState([]);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.email && person.password && person.firstname && person.lastname) {
            const newPerson = { ...person, id: new Date().getTime().toString() };
            setPeople([...people, newPerson]);
            setPerson({ email: '', password: '', firstname: '', lastname: '' });
        }
    };
    return (
        <>
            <article>
                <form>
                    <div className='m-3'>
                        <label htmlFor='firstname'>Firstname</label>
                        <input
                            type='text'
                            id='firstname'
                            name='firstname'
                            value={person.firstname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='m-3'>
                        <label htmlFor='lastname'>Lastname</label>
                        <input
                            type='text'
                            id='lastname'
                            name='lastname'
                            value={person.lastname}
                            onChange={handleChange}
                        />
                    </div>
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
                        Create account
                    </button>
                </form>
            </article>
        </>
    )
};

export default Signup;