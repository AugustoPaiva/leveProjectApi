const mongoose = require("mongoose");

const Person = mongoose.model("Person");
//controlers
module.exports = {
  async index(req, res) {
    const people = await Person.find();
    return res.json(people);
  },
  async show(req, res) {
    const person = await Person.findById(req.params.id);
    return res.json(person);
  },
  async showFilter(req, res) {
    const person = await people.find({ name: req.params.name });
    return res.json(person);
  },
  async store(req, res) {
    const person = await Person.create(req.body);
    return res.json(person);
  },

  async update(req, res) {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(person);
  },

  async destroy(req, res) {
    await Person.findByIdAndDelete(req.params.id);

    return res.send();
  }
};
