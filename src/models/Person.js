const mongoose = require("mongoose");
//person schema
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  scholarity: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    required: true
  }
});

mongoose.model("Person", PersonSchema);
