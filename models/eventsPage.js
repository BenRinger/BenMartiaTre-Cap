const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
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

const Event = mongoose.model('events', eventSchema);

module.exports = Event;