import ResetPassword from "../models/ResetPassword.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const register = async (data) => {
  const userExist = await User.findOne({ email: data.email });
  if (userExist) throw new Error("Email already exist...");

  const hashPassword = bcrypt.hashSync(data.password); // bcryptjs.hashSync(password,salt) ...salt is default 10

  const createdUser = await User.create({
    name: data.name,
    address: data.address,
    email: data.email,
    password: hashPassword,
    roles: data.roles,
    createdAt: data.createdAt,
  });
  return {
    id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    password: createdUser.password,
    roles: createdUser.roles,
  };
};

const login = async (data) => {
  const existingUser = await User.findOne({ email: data.email }); // findOne({email}) => find the detail from email in database of that email person

  if (!existingUser) throw new Error("Email or Password don't match..");

  const isMatch = bcrypt.compareSync(data.password, existingUser.password); //in async it will not wait and login successsfully
  if (!isMatch) throw new Error("Email or Password don't matc");

  return {
    id: existingUser._id,
    name: existingUser.name,
    email: existingUser.email,
    roles: existingUser.roles,
  };
};


const forgetPassword = async (email) => {
  const user = await User.findOne({ email });
  const currentTime = Date.now();
  const token =bcrypt.hashSync(`${email}-${currentTime}`);

  const data = await ResetPassword.create({
    userId: user._id,
    token,
  });
  return { userId: data.userId, token: data.token };
};


const resetPassword = async (password, token) => {
  const data = await ResetPassword.findOne({ 
    token,
    expiresAt:{$gt:Date.now()}
  });


  if (!data) throw new Error("Token is Invalid...");

  const hashPassword = bcrypt.hashSync(password);

  return await User.findByIdAndUpdate(data.userId, { password: hashPassword });
};
export default {
  register,
  login,
  forgetPassword,
  resetPassword,
};

// Cryptography
//Encryption-> plain text to cipher text
//Decrypttion-> cipher text to plain text

//Hash=> one way encryption(can't decrypt again)
