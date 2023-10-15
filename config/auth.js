//bcrypt for hashing password
const bcrypt = require("bcrypt");

//jwt to create token
const jwt = require("jsonwebtoken");
require("dotenv").config();

//to hash password
const hashPassword = async (password) => {
  let salt = await bcrypt.genSalt(10);
  let hash = await bcrypt.hash(password, salt);
  return hash;
};

//compares hashed password and request password
const hashCompare = (password, hash) => {
  return bcrypt.compare(password, hash);
};

//jwt(json web token) to create token for authentication 
const createToken = ({ firstName, lastName, email, role }) => {
  let token = jwt.sign(
    { firstName, lastName, email, role },
    process.env.SECRET_KEY,
    {
      expiresIn: process.env.EXPIRE,
    }
  );
  return token;
};



module.exports = {
  hashPassword,
  hashCompare,
  createToken,

};