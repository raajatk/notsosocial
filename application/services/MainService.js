var MainService = {
  hello_world: function(req,res){
    console.log("HELLO WORLD");
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
    domain.User.find({email:user.email,password:user.password},
      (err,results)=>{
        if(!err){
          res.send({msg:"User Logged in Successfully",user:results})
        }else {
          res.send({msg:"Some Error Occured",err:err})
        }
      })

  },



  getAllUsers: function(req, res){
    domain.User.find(function(err,results){
      console.log("the results is ",results);
      res.send({msg:results})
    });
  },
  addUser: function(req, res){
    var user = new domain.User(req.body.user)
    user.save((err,results)=>{
      console.log("the user is added ",results);
      res.send({msg:"Successfully added the user",results:results})
    })
  }
}

module.exports = MainService
