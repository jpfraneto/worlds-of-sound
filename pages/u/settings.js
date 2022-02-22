import { getLayout } from '../../components/AccountLayout';
import { useState } from 'react';

const AccountSettings = ({ userData, setUserData }) => {
  const [userSettings, setUserSettings] = useState({ _id: userData._id });
  const handleChange = e => {
    setUserSettings(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUserUpdate = async e => {
    const reqParams = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userSettings),
    };
    const response = await fetch(`/api/users/${userData.email}`, reqParams);
    const data = await response.json();
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <form>
          <div>
            <label htmlFor='soundcloudId'>What is your soundcloud ID?</label>
            <input
              type='text'
              id='soundcloudId'
              placeholder='Soundcloud ID'
              name='soundcloudId'
              value={userData && userData.soundcloudId}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='youtubeId'>What is your youtube ID?</label>

            <input
              type='text'
              id='youtubeId'
              placeholder='Youtube ID'
              name='youtubeId'
              value={userData && userData.youtubeId}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='username'>What is your username?</label>

            <input
              type='text'
              id='username'
              placeholder='Username'
              name='username'
              value={userData && userData.username}
              onChange={handleChange}
            />
          </div>
          <button type='button' onClick={handleUserUpdate}>
            Update!
          </button>
        </form>
      </div>
    </div>
  );
};

AccountSettings.getLayout = getLayout;

export default AccountSettings;
