// Dependencies
const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
  },
  penName: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  ETag: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
      text: {
        type: String,
      },
      name: {
        type: String,
      },
      penName: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

const Story = mongoose.model('story', StorySchema);

module.exports = Story;
