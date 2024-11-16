const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  imageURL: { type: String, required: true },
  category: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);