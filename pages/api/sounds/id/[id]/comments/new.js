const { connectToDatabase } = require('../../../../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'POST': {
      return addComment(req, res);
    }
  }
}

const addComment = async (req, res) => {
  let { db } = await connectToDatabase();
  await db
    .collection('sounds')
    .updateOne(
      { _id: new ObjectId(req.query.id) },
      { $push: { comments: req.body.theNewComment } }
    );

  return res.json({
    success: true,
    message: 'The comment was successfully added to the sound in the DB',
  });
};
