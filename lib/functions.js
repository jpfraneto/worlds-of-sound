import { v4 as uuid } from 'uuid';

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
    /(https?:\/\/open.spotify.com\/(track|user|artist|album)\/[a-zA-Z0-9]+(\/playlist\/[a-zA-Z0-9]+|)|spotify:(track|user|artist|album):[a-zA-Z0-9]+(:playlist:[a-zA-Z0-9]+|))/;
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
  const response = await fetch(`https://w.soundcloud.com/player/?url=${url}`);
  const data = await response.json();
  console.log('the daaaata is: ', data);
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

export const getSoundInformation = async sound => {
  switch (sound.provider) {
    case 'spotify':
      const response1 = await fetch(
        `https://api.spotify.com/v1/albums/${sound.soundId}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Authorization: Bearer BQDRI8DW8023gFPliJOrP4pGJ_hZzM1YmODqNEDKdqslDLh3YjCmwA3p4PU3IKuDN80q3pPn75BG9oN_1xViRa5xjiDXQtBSkAPPHsEQwkMIIQn0AZdFlSQd_o2_uXviv8oyF2aVh5UsQtev`,
          },
        }
      );
      const spotifyData = await response1.json();
      console.log('the spotify data is: ', spotifyData);
      break;
    case 'soundcloud':
      const response2 = await fetch('https://api.soundcloud.com/me', {
        method: 'GET',
        headers: {
          Authorization: `OAuth ${process.env.SOUNDCLOUD_OAUTH_TOKEN}`,
        },
      });
      const soundcloudData = await response2.json();
      console.log('the soundcloud data is: ', soundcloudData);
      break;
    case 'youtube':
      const youtubeId = getIdFromYoutubeUrl(sound.url);
      const urlForFetching = `https://www.googleapis.com/youtube/v3/videos?id=${youtubeId}&key=${process.env.YOUTUBE_API_KEY}&fields=items(id,snippet(title),statistics,%20contentDetails(duration))&part=snippet,statistics,%20contentDetails`;
      const response3 = await fetch(urlForFetching);
      const data = await response3.json();
      sound.duration = data.items[0].contentDetails.duration;
      sound.title = data.items[0].snippet.title;
      break;
  }
  return sound;
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
