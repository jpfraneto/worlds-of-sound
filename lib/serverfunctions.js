import spotifyApi from './spotify';

export const getSoundInformation = async sound => {
  sound.metadata = {};

  switch (sound.provider) {
    case 'spotify':
      if (sound.selectedSoundType === 'podcast') {
        const myToken = spotifyApi.getAccessToken();
        const spotifyResponse = await fetch(
          `https://api.spotify.com/v1/episodes/${sound.soundId}?market=ES`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${myToken}`,
            },
          }
        );
        const podcastInfo = await spotifyResponse.json();
        console.log('the podcastInfo is: ', podcastInfo);
        sound.metadata.show = podcastInfo.show.name;
        sound.metadata.podcastAuthor = podcastInfo.show.publisher;
        sound.metadata.duration = podcastInfo.duration_ms;
        sound.metadata.image = podcastInfo.images[0];
        sound.metadata.name = podcastInfo.name;
        sound.metadata.episode_number = podcastInfo.show.total_episodes;
        sound.metadata.release_date = podcastInfo.release_date;
      } else if (sound.selectedSoundType === 'albums') {
        const albumInfo = await spotifyApi.getAlbum(sound.soundId);
        sound.metadata.artists = albumInfo.body.artists;
        sound.metadata.name = albumInfo.body.name;
        sound.metadata.image = albumInfo.body.images[0];
        sound.metadata.release_date = albumInfo.body.release_date;
      }
      break;
    case 'soundcloud':
      // const response2 = await fetch('https://api.soundcloud.com/me', {
      //   method: 'GET',
      //   headers: {
      //     Authorization: `OAuth ${process.env.SOUNDCLOUD_OAUTH_TOKEN}`,
      //   },
      // });
      // const soundcloudData = await response2.json();
      // console.log('the soundcloud data is: ', soundcloudData);
      break;
    case 'youtube':
      const youtubeId = sound.soundId;
      console.log(
        'the youutbe id is: ',
        youtubeId,
        process.env.YOUTUBE_API_KEY
      );
      const urlForFetching = `https://www.googleapis.com/youtube/v3/videos?id=${youtubeId}&key=${process.env.YOUTUBE_API_KEY}&fields=items(id,snippet(title),statistics,%20contentDetails(duration))&part=snippet,statistics,%20contentDetails`;
      const response3 = await fetch(urlForFetching);
      const data = await response3.json();
      console.log('THE DATA IS: ', data);
      sound.metadata.duration = data.items[0].contentDetails.duration;
      sound.metadata.title = data.items[0].snippet.title;
      break;
  }
  return sound;
};
