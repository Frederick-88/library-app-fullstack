const mongoose = require('mongoose')
const Schema = mongoose.Schema

const libraryModel = new Schema({
    bookTitle : {
        type: String,
        required: true  
    },
    years : {
        type: Number,
        required: true  
    },
    bookNumber  : {
        type: String,
        required: true  
    },
    status : {
        type: String,
        required: true  
    }
})
module.exports = mongoose.model('library',libraryModel)