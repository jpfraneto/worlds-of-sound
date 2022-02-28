const { connectToDatabase } = require('../../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  switch (req.method) {
    case 'PUT': {
      return updateUser(req, res);
    }
  }
}

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
