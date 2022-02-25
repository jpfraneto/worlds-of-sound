const { connectToDatabase } = require('../../../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      return getUserSounds(req, res);
    }
  }
}

const getUserSounds = async (req, res) => {
  let { db } = await connectToDatabase();
  const user = await db
    .collection('users')
    .findOne({ username: req.query.username });
  return res.json({ user });
};
