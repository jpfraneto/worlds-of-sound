import { v4 as uuid } from 'uuid';
import { BsSpotify } from 'react-icons/bs';
import { FaSoundcloud } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { icons } from 'react-icons';

export const createUniqueId = () => {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  return small_id;
};

export const getSoundProvider = url => {
  const youtubeRegex =
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  const soundcloudRegex = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
  const spotifyRegex =
    /(https?:\/\/open.spotify.com\/(track|user|artist|album|episode)\/[a-zA-Z0-9]+(\/playlist\/[a-zA-Z0-9]+|)|spotify:(track|user|artist|album|episode):[a-zA-Z0-9]+(:playlist:[a-zA-Z0-9]+|))/;
  if (url.match(youtubeRegex)?.length > 0) return 'youtube';
  if (url.match(soundcloudRegex)?.length > 0) return 'soundcloud';
  if (url.match(spotifyRegex)?.length > 0) return 'spotify';

  return null;
};

const getIdFromYoutubeUrl = url => {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
};

const getIdFromSpotifyUrl = url => {
  const splitted = url.split('/');
  const spotifyAlbumId = splitted[splitted.length - 1].split('?')[0];
  if (spotifyAlbumId.length === 22) return spotifyAlbumId;
  return 'Not valid url';
};

export const getIdFromSoundcloudUrl = async url => {
  return url;
};

export const getSoundId = (provider, url) => {
  switch (provider) {
    case 'spotify':
      return getIdFromSpotifyUrl(url);
      break;
    case 'soundcloud':
      return getIdFromSoundcloudUrl(url);
      break;
    case 'youtube':
      return getIdFromYoutubeUrl(url);
      break;
  }
};

export const generateRandomString = length => {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const msToTime = ms => {
  var minutes = Math.floor(ms / 60000);
  var seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

export const getFetchingRoute = () => {
  return '';
};
