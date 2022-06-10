const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
    title: {
    required: true
        },
description: { 
    required: true
},
imageURL: {  
    Type: String
    }
});

const Historical = mongoose.model('Historical', historySchema);

module.exports = Historical;