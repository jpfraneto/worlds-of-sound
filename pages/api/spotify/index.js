import { getAccessToken, getNowPlaying } from '../../../lib/spotify';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return handleGetRequest(req, res);
    }
    case 'POST': {
      return handleSpotifyRequest(req, res);
    }
  }
}

const handleGetRequest = async (req, res) => {
  const response = await getNowPlaying(req.query.token);
  const data = await response.json();
  res.json(data);
};

const handleSpotifyRequest = async (req, res) => {
  let code = req.body;
  const data = await getAccessToken(code);
  const { access_token } = data;
  return res.json({ access_token });
};
