const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getMusic(req, res);
    }

    case 'POST': {
      return addMusic(req, res);
    }

    case 'PUT': {
      return updateMusic(req, res);
    }

    case 'DELETE': {
      return deleteMusic(req, res);
    }
  }
}

const getMusic = async (req, res) => {
  let { db } = await connectToDatabase();
  const music = await db.collection('music').find({}).toArray();
  return res.json(music);
};

const addMusic = async (req, res) => {
  try {
    let { db } = await connectToDatabase();
    await db.collection('music').insertOne(req.body);
    return res.json({
      message: 'The music was added successfully',
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};

const updateMusic = async (req, res) => {
  let { db } = await connectToDatabase();
  console.log('inside the update music route', req.body);
  await db.collection('music').updateOne(
    {
      _id: ObjectId(req.body._id),
    }
    // { $push: { timestamps: req.body.timestamp } }
  );
  return res.json({
    message: 'Music updated successfully',
    success: true,
  });
};
