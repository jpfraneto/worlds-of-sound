const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
import { getSession } from 'next-auth/react';
import { getSoundInformation } from '../../../lib/serverfunctions';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getSounds(req, res);
    }

    case 'POST': {
      return addSound(req, res);
    }

    case 'PUT': {
      return updateSound(req, res);
    }

    case 'DELETE': {
      return deleteSound(req, res);
    }
  }
}

const getSounds = async (req, res) => {
  let { db } = await connectToDatabase();
  const sounds = await db.collection('sounds').find({}).toArray();
  return res.json(sounds);
};

const addSound = async (req, res) => {
  const session = await getSession({ req });
  if (!session)
    return res.json({
      message: 'You need to be an authenticated user to add a new sound',
      success: false,
    });
  try {
    let { db } = await connectToDatabase();
    const newSound = await getSoundInformation(req.body.newSound);
    const provider = newSound.provider;
    newSound.author = {
      email: session.user.email,
      id: session.id,
      image: session.user.image,
    };
    newSound.metadata.title = req.body.title;
    console.log('the new sound is: ', newSound);
    const response = await db.collection('sounds').insertOne(newSound);
    const response3 = await db
      .collection('recentlyAddedSounds')
      .insertOne(newSound);
    const newSoundReference = {
      _id: response._id,
    };
    let response2;
    let userResponse;
    if (newSound.provider === 'youtube') {
      userResponse = await db.collection('users').updateOne(
        {
          _id: ObjectId(session.id),
        },
        { $push: { youtube: newSound } }
      );
      response2 = await db
        .collection('soundtypes')
        .updateOne(
          { soundtype: newSound.selectedSoundType },
          { $push: { 'sounds.youtube': newSoundReference } }
        );
    }
    if (newSound.provider === 'soundcloud') {
      userResponse = await db.collection('users').updateOne(
        {
          _id: ObjectId(session.id),
        },
        { $push: { soundcloud: newSound } }
      );
      response2 = await db
        .collection('soundtypes')
        .updateOne(
          { soundtype: newSound.selectedSoundType },
          { $push: { 'sounds.soundcloud': newSoundReference } }
        );
    }
    if (newSound.provider === 'spotify') {
      userResponse = await db.collection('users').updateOne(
        {
          _id: ObjectId(session.id),
        },
        { $push: { spotify: newSound } }
      );
      response2 = await db
        .collection('soundtypes')
        .updateOne(
          { soundtype: newSound.selectedSoundType },
          { $push: { 'sounds.spotify': newSoundReference } }
        );
    }

    if (!response || !userResponse)
      throw new Error('There was a problem adding the new sound.');
    return res.json({
      message: 'The sound was added successfully to the Worlds of Sound',
      success: true,
      soundId: response.insertedId,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};

const updateSound = async (req, res) => {
  let { db } = await connectToDatabase();
  console.log('inside the update sound route', req.body);
  await db.collection('sound').updateOne(
    {
      _id: ObjectId(req.body._id),
    }
    // { $push: { timestamps: req.body.timestamp } }
  );
  return res.json({
    message: 'Sound updated successfully',
    success: true,
  });
};
