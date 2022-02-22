const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getUser(req, res);
    }

    case 'PUT': {
      return updateUser(req, res);
    }

    case 'DELETE': {
      return deleteUser(req, res);
    }
  }
}

const getUser = async (req, res) => {
  let { db } = await connectToDatabase();
  const user = await db.collection('users').findOne({ email: req.query.email });
  res.json(user);
  //   return res.json(users);
};

const updateUser = async (req, res) => {
  let { db } = await connectToDatabase();
  try {
    await db.collection('users').updateOne(
      {
        _id: ObjectId(req.body._id),
      },
      {
        $set: {
          soundcloudId: req.body.soundcloudId,
          youtubeId: req.body.youtubeId,
          username: req.body.username,
        },
      }
    );
    return res.json({
      message: 'The user was updated successfully',
      success: true,
    });
  } catch (error) {
    console.error();
    return res.json({
      message: 'There was an error updating the user',
      success: false,
    });
  }
};
