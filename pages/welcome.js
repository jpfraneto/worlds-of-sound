import Link from 'next/link';
import { useState } from 'react';
import { getIdFromSoundcloudUrl } from '../lib/functions';

export default function Welcome() {
  const [url, setUrl] = useState('');
  const getIdFromYoutubeUrl = url => {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };
  const handleYoutubeFetch = async () => {
    const urlForFetching = `https://api-widget.soundcloud.com/resolve?url=https://soundcloud.com/darpan/embrace-the-one?in=darpan/sets/selected-tracks&format=json&client_id=XN2B69zrNGzHSSxMkvbp6MJYR1cHKOoH`;
    const response = await fetch(urlForFetching, {
      mode: 'no-cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log('the eesponse is: ', response);
    const data = await response.json();
    console.log('the data is: ', data);
  };
  return (
    <div>
      Here goes the welcome page
      <input
        type='text'
        placeholder='url'
        name='url'
        onChange={e => {
          setUrl(e.target.value);
        }}
      />
      <button onClick={handleYoutubeFetch} type='button'>
        Fetch youtube
      </button>
      <Link href='/'>
        <a>Go Back</a>
      </Link>
    </div>
  );
}
