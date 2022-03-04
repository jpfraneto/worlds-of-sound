import { getNowPlaying, getUserSavedAlbums } from '../../../lib/spotify';

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
  switch (req.query.requesttype) {
    case 'savedalbums': {
      const response = await getUserSavedAlbums(req.query.token);
      const data = await response.json();
      return res.json(data);
    }
    case 'playbackstatus': {
      const response = await getNowPlaying(req.query.token);
      const data = await response.json();
      return res.json(data);
    }
  }
};
