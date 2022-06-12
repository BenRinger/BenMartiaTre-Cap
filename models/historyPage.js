const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
    title: {
        type: String,
        },
description: { 
        type: String,
},
imageURL: {  
        type: String,
    }
});

const Historical = mongoose.model('Historical', historySchema);

module.exports = Historical;