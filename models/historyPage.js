const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
    title: {
         type: String, 
         required: true
        },
description: { 
    type: String, 
    required: true
},
imageURL: { 
    type: String,
     required: true 
    }
});

const Historical = mongoose.model('Historical', historySchema);

module.exports = Historical;