
// dependency
var mongoose = require('mongoose');

// creates Schema class
var Schema = mongoose.Schema;

// creates Notes schema
var NotesSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
});

// creates Notes model
var Notes = mongoose.model("Notes", NotesSchema);

// exports Notes model
module.exports = Notes;
