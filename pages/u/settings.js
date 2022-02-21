import { getLayout } from '../../components/AccountLayout';

const AccountSettings = () => {
  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label for='soundcloudId'>What is your soundcloud ID?</label>
        <input
          type='text'
          id='soundcloudId'
          placeholder='Soundcloud ID'
          name='soundcloudId'
        />
      </div>
    </div>
  );
};

AccountSettings.getLayout = getLayout;

export default AccountSettings;
