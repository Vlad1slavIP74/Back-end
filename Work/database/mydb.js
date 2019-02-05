
const mongoose = require('mongoose');

const Info = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    age: Number,
    profession: String,
    skills: String,
    salary: Number
})

const DataBase = mongoose.model('DataBase', Info);

module.exports = DataBase;
