const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String
  },
  content:{
    type: String
  },
  // author:{
  //   type: String
  // },
  // datePosted:{
  //   type: Date
  // }
  // firstName: {
  //   type: String,
  //   required: true,
  //   minLength: 4,
  //   trim: true
  // },
  // lastName: {
  //   type: String,
  //   required: true,
  //   minLength: 4,
  //   trim: true
  // },
  // isActive: {
  //   type: Number,
  //   default: 0,
  //   minLength: 4
  // }
});

module.exports = mongoose.model('posts', BlogSchema);

