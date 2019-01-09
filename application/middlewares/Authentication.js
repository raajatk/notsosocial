var authentication = (req, res, next)=>{
  console.log("Now we are inside Authentication Middleware",req.headers.auth_token);
  if(!req.headers.auth_token){
    res.sendStatus(401)
  }else {
    var auth_token = req.headers.auth_token;
    domain.AuthenticationToken.findOne({auth_token:auth_token}).populate('user_id').exec((err,results)=>{
      console.log("Authenticating ",err,results);
      if(!err && results){

        req.logged_in_user = results.user_id;
        next()
      }else {
        res.sendStatus(401)
      }
    })
  }

}

module.exports = authentication;
