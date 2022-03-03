const { SPOTIFY_CLIENT_ID: client_id, SPOTIFY_CLIENT_SECRET: client_secret } =
  process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const MY_ALBUMS_ENDPOINT = `https://api.spotify.com/v1/me/albums?limit=50`;

export const getAccessToken = async code => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: 'http://localhost:3000/testingapis/spotify',
    }),
  });
  return response.json();
};

export const getNowPlaying = async access_token => {
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getUserSavedAlbums = async access_token => {
  return fetch(MY_ALBUMS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
