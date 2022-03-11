const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      return getSoundTypes(req, res);
    }
    case 'POST': {
      return addSoundType(req, res);
    }
  }
}

const getSoundTypes = async (req, res) => {
  try {
    let { db } = await connectToDatabase();
    const soundTypes = await db
      .collection('soundtypes')
      .find({}, { sounds: 0 })
      .toArray();
    return res.json(soundTypes);
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};

const addSoundType = async (req, res) => {
  try {
    if (process.env.GENERAL_PASSWORD !== req.body.password)
      throw new Error('You are not allowed to do this');
    let { db } = await connectToDatabase();
    const { soundtype, typeImage } = req.body;
    const newSoundType = { soundtype, typeImage };
    newSoundType.sounds = { youtube: [], spotify: [], soundcloud: [] };
    const response = await db.collection('soundtypes').insertOne(newSoundType);
    console.log('the response is: ', response);
    return res.json({
      message: 'The sound type was added successfully to the Worlds of Sound',
      success: true,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
};
