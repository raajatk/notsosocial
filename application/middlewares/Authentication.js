var authentication = (req, res, next)=>{
  console.log("Now we are inside Authentication Middleware",req.headers.authorizationtoken);
  next();

}

module.exports = authentication;
