const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
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

const Event = mongoose.model('Events', eventSchema);

module.exports = Event;