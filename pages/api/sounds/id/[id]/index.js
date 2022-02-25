const { connectToDatabase } = require('../../../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getSoundById(req, res);
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

const getSoundById = async (req, res) => {
  let { db } = await connectToDatabase();
  const sound = await db
    .collection('sounds')
    .findOne({ _id: new ObjectId(req.query.id) });
  console.log('the found sound is: ', sound);
  return res.json(sound);
};
