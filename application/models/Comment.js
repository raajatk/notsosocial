var timestamps = require('mongoose-timestamp');

var CommentSchema = new mongooseSchema({
  post_id:{
    type: mongooseSchema.ObjectId,
    ref:'post'
  },
  comment_by:{
    type: mongooseSchema.ObjectId,
    ref:'user'
  },
  comment:{
    type: String,
    required: true,
		trim: true,
    validate: [stringNotNull, "Comment is required."]
  },
  likes_count:{
    type: Number,
    default: 0
  }
});

CommentSchema.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});

CommentSchema.plugin(timestamps);

function stringNotNull(obj){
    return obj.length
}

var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment
