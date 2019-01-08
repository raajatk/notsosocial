var timestamps = require('mongoose-timestamp');

var LikeSchema = new mongooseSchema({
  post_id:{
    type: mongooseSchema.ObjectId,
    ref:'post'
  },
  like_type:{
    type: String,
    enum:['Post','Comment']
  },
  liked_by:{
    type: mongooseSchema.ObjectId,
    ref:'user'
  }
});

LikeSchema.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});

LikeSchema.plugin(timestamps);

function stringNotNull(obj){
    return obj.length
}

var Like = mongoose.model('Like', LikeSchema);
module.exports = Like
