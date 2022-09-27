import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';


const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('Usear already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

});


export {

  registerUser,
 
};