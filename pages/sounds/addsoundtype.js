import React, { useState } from 'react';

const Addsoundtype = () => {
  const [soundType, setSoundType] = useState('');
  const [typeImage, setTypeImage] = useState('');
  const [password, setPassword] = useState('');
  const addToDB = async () => {
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        soundtype: soundType,
        typeImage,
        password,
      }),
    };
    const response = await fetch('/api/sounds/types', reqParams);
    const data = await response.json();
    console.log('the data is: ', data);
  };
  const getSoundTypes = async () => {
    const response = await fetch('/api/sounds/types');
    const types = await response.json();
    console.log('the types are: ', types);
  };
  return (
    <div>
      <input
        type='text'
        name='soundtype'
        onChange={e => setSoundType(e.target.value)}
        placeholder='what is the type?'
      />
      <input
        type='text'
        name='imageLocation'
        onChange={e => setTypeImage(e.target.value)}
        placeholder='what is the location of the sounds image?'
      />

      <input
        type='text'
        name='password'
        onChange={e => setPassword(e.target.value)}
        placeholder='what is the password?'
      />

      <button type='button' onClick={addToDB}>
        Send To DB
      </button>
      <button type='button' onClick={getSoundTypes}>
        Get sound Types
      </button>
    </div>
  );
};

export default Addsoundtype;
