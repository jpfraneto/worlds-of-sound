const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getScheduledSounds(req, res);
    }

    case 'POST': {
      return addScheduledSound(req, res);
    }
    case 'PUT': {
      return editScheduledSound(req, res);
    }
  }
}

const getScheduledSounds = async (req, res) => {
  let { db } = await connectToDatabase();
  const scheduledSounds = await db
    .collection('scheduledSounds')
    .find({})
    .toArray();
  return res.json(scheduledSounds);
};

const addScheduledSound = async (req, res) => {
  const session = await getSession({ req });
  if (!session)
    return res.json({
      message:
        'You need to be an authenticated user to add a new sound schedule',
      success: false,
    });
  try {
    let { db } = await connectToDatabase();
    const newSoundSchedule = req.body;
    newSoundSchedule.author = {
      username: session.username,
      id: session.id,
    };
    const response = await db
      .collection('scheduledSounds')
      .insertOne(newSoundSchedule);
    const userResponse = await db.collection('users').updateOne(
      {
        _id: ObjectId(session.id),
      },
      { $push: { scheduledSounds: newSoundSchedule } }
    );
    if (!response || !userResponse)
      throw new Error('There was a problem adding the new sound schedule.');
    return res.json({
      message:
        'The sound schedule was added successfully to the Worlds of Sound',
      success: true,
      soundId: response.insertedId,
      username: session.username,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};
