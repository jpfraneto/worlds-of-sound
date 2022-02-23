const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

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
  console.log('the get sounds req.query is', req.query);
  const sounds = await db
    .collection('sounds')
    .find({ type: req.query.type })
    .toArray();
  return res.json(sounds);
};
