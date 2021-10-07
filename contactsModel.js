const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  dateNow: { type: Date, default: Date.now },
});

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;

module.exports.get = (callback, limit) => {
  Contact.find(callback).limit(limit);
};
