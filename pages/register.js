import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Register.module.css';

export default function Register({ users }) {
  const [user, setUser] = useState({ username: '', age: null, timestamps: [] });
  const handleChange = e => {
    console.log('inside the handlechange', e.target.name, e.target.value);
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };
    const response = await fetch('/api/users', reqParams);
    const data = await response.json();
  };

  const handleAddTimestamp = async username => {
    const timestamp = new Date().getTime();
    const reqParams = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, timestamp }),
    };
    const response = await fetch('/api/users', reqParams);
    const data = await response.json();
    console.log('the timestamp was added: ', data);
  };
  return (
    <div>
      <div>
        <input type='text' name='username' onChange={handleChange} />
        <input type='number' name='age' onChange={handleChange} />
        <button onClick={handleSubmit}>Add user to db</button>
      </div>
      <div>
        <p>The users information is: </p>
        {user.username && <p>Username : {user.username}</p>}
        {user.age && <p>Age : {user.age}</p>}
      </div>
      <Link href='/'>
        <a>Go Back</a>
      </Link>
      <div className={styles.usersPlayground}>
        {users.map(user => (
          <div className={styles.userLine} key={user.username}>
            <p>
              {user.username} {user.timestamps.length}
            </p>
            <button onClick={() => handleAddTimestamp(user.username)}>
              add timestamp
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();
  return {
    props: { users },
  };
}
