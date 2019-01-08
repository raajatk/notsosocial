var timestamps = require('mongoose-timestamp');

var FriendSchema = new mongooseSchema({
  sender_id:{
    type: mongooseSchema.ObjectId,
    ref:'user'
  },
  receiver_id: {
    type: mongooseSchema.ObjectId,
    ref:'user'
  },
  created: {
		type: Date,
		default: Date.now
	},
  is_confirm:{
    type:Boolean,
    default:false
  },
  is_seen:{
    type:Boolean,
    default:false
  }
});

FriendSchema.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});

FriendSchema.plugin(timestamps);

function stringNotNull(obj){
    return obj.length
}

var Friend = mongoose.model('Friend', FriendSchema);
module.exports = Friend
