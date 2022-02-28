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
