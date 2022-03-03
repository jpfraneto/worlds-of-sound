const { createContext } = require('react');

const SpotifyContext = createContext({
  userToken: null,
  setUserToken: tkn => {},
});

export default SpotifyContext;
