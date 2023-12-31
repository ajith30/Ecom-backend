import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  //creating token
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });

console.log(process.env.NODE_ENV);

  //Set JWT as an HTTP-Only cookie (storing the token in cookie insted of localStorage)
  res.cookie("jwt", token, {
    path: "/",
    httpOnly: true,
    secure: true, //secure cookie in production environment
    sameSite: "none", // Allow the cookie to be sent with cross-site requests only in production
                                                                        //sameSite: "true",//"strict",  //Prevent CSRF attacks
    maxAge: 60 * 60 * 1000,  // 1 hour in milliseconds
  });
}



export default generateToken;