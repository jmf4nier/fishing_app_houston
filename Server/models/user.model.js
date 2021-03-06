const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jwt-simple')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    minlength: 3,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: value => {
        if (!validator.isEmail(value)) {
            throw new Error({error: 'Invalid Email address'})
        }
    }
  },
  password: {
    type: String, 
    minlength: 5
  },
  
}, {
  timestamps: true,
  versionKey: false
});

userSchema.pre('save', async function (next) {
  // Hash the password before saving the user model
  const user = this
  if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
  }
  next()
});

userSchema.methods.generateAuthToken = async function() {
  // Generate an auth token for the user
  const user = this
  const token = jwt.encode({_id: user._id}, process.env.JWT_KEY)
  return token
};

userSchema.statics.findByCredentials = async (email, password) => {
  // Search for a user by email and password.
  const user = await User.findOne({ email} )
  if (!user) {
      throw new Error({ error: 'Invalid login credentials' })
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  if (!isPasswordMatch) {
      throw new Error({ error: 'Invalid login credentials' })
  }
  return user
}

const User = mongoose.model('User', userSchema);

module.exports = User;