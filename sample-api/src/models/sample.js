const mongoose = require('mongoose')
  const { Schema } = mongoose;

  const sampleSchema = new Schema({
    title:  String, 
    author: String,
    body:   String
  });

  

  
const Sample = mongoose.model('Sample', sampleSchema);

module.exports = Sample