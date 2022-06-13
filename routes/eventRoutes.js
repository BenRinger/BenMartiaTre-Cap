const router = require('express').Router();
let Event = require('../models/eventsPage');

router.route('/').get((req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageURL = req.body.imageURL;

    const newEvent = new Event({
        title, 
        description, 
        imageURL
    });

    newEvent.save()
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;