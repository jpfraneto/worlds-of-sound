const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getSoundsByType(req, res);
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

const getSoundsByType = async (req, res) => {
  let { db } = await connectToDatabase();
  const sounds = await db
    .collection('sounds')
    .find({ selectedSoundType: req.query.type })
    .toArray();
  return res.json(sounds);
};
