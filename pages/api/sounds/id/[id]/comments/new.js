const { connectToDatabase } = require('../../../../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
import { getSession } from 'next-auth/react';

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
  const session = await getSession({ req });
  const newComment = req.body.theNewComment;
  newComment.author = { username: session.username, id: session.id };
  await db
    .collection('sounds')
    .updateOne(
      { _id: new ObjectId(req.query.id) },
      { $push: { comments: newComment } }
    );

  return res.json({
    success: true,
    message: 'The comment was successfully added to the sound in the DB',
  });
};
