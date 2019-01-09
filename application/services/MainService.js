var MainService = {
  hello_world: function(req,res){
    console.log("HELLO WORLD",req.user);
    res.send({msg:"hello World"})
  },

  user_signup: function(req, res){
    console.log("the body is ",req.body.user);
    var user = new domain.User(req.body.user)
    user.save((err,results)=>{
      if(!err){
        console.log("the user is added ",err,results);
        res.send({msg:"Successfully added the user",results:results})
      }else{
        console.log("some error occured ",err);
        res.send({msg:"Internal Server Error",err:err})
      }

    })
  },

  user_login: function(req, res){
    console.log("the body is ",req.body.user);
    var user = req.body.user;
    domain.User.findOne({email:user.email,password:user.password},
      (err,results)=>{
        if(!err){
          var auth_token_object = {
            auth_token:'1234',
            user_id:results._id
          }
          var auth_db_obj = new domain.AuthenticationToken(auth_token_object);
          auth_db_obj.save((err,results)=>{
            if(!err){
              res.send({msg:"User Logged in Successfully",user:results})
            }else {
              res.send({msg:"Some Error Occured",err:err})
            }
          })
        }else {
          res.send({msg:"Some Error Occured",err:err})
        }
      })

  }



}

module.exports = MainService
