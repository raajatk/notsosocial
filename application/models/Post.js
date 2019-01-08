var timestamps = require('mongoose-timestamp');

var PostSchema = new mongooseSchema({
  posted_by:{
    type: mongooseSchema.ObjectId,
    ref:'user'
  },
  likes_count:{
    type: Number,
    default: 0
  },
  comments_count:{
    type: Number,
    default: 0
  }
});

PostSchema.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});

PostSchema.plugin(timestamps);

function stringNotNull(obj){
    return obj.length
}

var Post = mongoose.model('Post', PostSchema);
module.exports = Post
