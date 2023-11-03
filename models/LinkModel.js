import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  appName: {
    type: String,
    unique: true,
    required: true,
  },
  playstoreUrl: {
    type: String
  },
  applestoreUrl: {
    type: String
  },
});

const User = mongoose.model('qupLink', schema);

export default User;
