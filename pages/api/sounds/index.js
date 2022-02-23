const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

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
  try {
    let { db } = await connectToDatabase();
    const response = await db.collection('sounds').insertOne(req.body);
    return res.json({
      message: 'The sound was added successfully to the Worlds of Sound',
      success: true,
      soundId: response.insertedId,
    });
  } catch (error) {
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
