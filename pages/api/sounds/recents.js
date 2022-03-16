const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getSounds(req, res);
    }
  }
}

const getSounds = async (req, res) => {
  let { db } = await connectToDatabase();
  const recentSounds = await db
    .collection('recentlyAddedSounds')
    .find({})
    .toArray();
  console.log('the receent sounds are: ', recentSounds);
  return res.json(recentSounds);
};
