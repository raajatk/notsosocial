var timestamps = require('mongoose-timestamp');

var UserSchema = new mongooseSchema({
	first_name: {
		type: String,
		default: '',
		required: true,
		trim: true,
    validate: [stringNotNull, "First name is required."]
	},
  last_name: {
		type: String,
		default: '',
		required: true,
		trim: true
	},
  email: {
		type: String,
		default: '',
		required: true,
		trim: true,
    unique : true
	},
  password: {
		type: String,
		default: '',
		required: true,
		trim: true
	},
  salt:{
      type:String,
      default:'',
      // required:true,
      trim:true
  },
  is_account_active:{
      type:Boolean,
      default:false,
      required:true,
      trim:true
  },
  created: {
		type: Date,
		default: Date.now
	}
});

UserSchema.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
});

UserSchema.plugin(timestamps);

function stringNotNull(obj){
    return obj.length
}

var User = mongoose.model('User', UserSchema);
module.exports = User
