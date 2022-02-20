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
  console.log('the gotten user is: ', user);
  res.json(user);
  //   return res.json(users);
};

const updateUser = async (req, res) => {
  let { db } = await connectToDatabase();
  console.log('inside the update User route', req.body);
  await db.collection('users').updateOne(
    {
      email: req.query.email,
    },
    { $push: { music: req.body } }
  );
  return res.json({
    message: 'User updated successfully',
    success: true,
  });
};
