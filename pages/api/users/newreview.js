const { connectToDatabase } = require('../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'POST': {
      return addReview(req, res);
    }
  }
}

const addReview = async (req, res) => {
  console.log('inside the add review route');
  const session = await getSession({ req });
  if (!session)
    return res.json({
      message: 'You need to be an authenticated user to add a new review',
      success: false,
    });
  try {
    let { db } = await connectToDatabase();
    const newReview = {
      author: {
        id: session.id,
        username: session.username,
      },
      url: req.body.url,
      service: req.body.service,
      added_timestamp: new Date().getTime(),
      review: req.body.review,
      comments: [],
    };
    const response = await db.collection('reviews').insertOne(newReview);
    const userResponse = await db.collection('users').updateOne(
      {
        _id: ObjectId(session.id),
      },
      { $push: { reviews: newReview } }
    );
    if (!response || !userResponse)
      throw new Error('There was a problem adding the new review.');
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
