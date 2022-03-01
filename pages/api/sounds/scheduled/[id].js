const { connectToDatabase } = require('../../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

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
  const scheduledSound = await db
    .collection('scheduledSounds')
    .findOne({ _id: new ObjectId(req.query.id) });
  return res.json(scheduledSound);
};
