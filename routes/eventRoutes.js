const router = require('express').Router();
const Event = require('../models/eventsPage');



router.route('/').get((req, res) => {
    Event.find()
        .then(Events => res.json(Events))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = (req.body.title);
    const description = (req.body.description);
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

router.route('/:id').get((req, res) => {  
    Event.findById(req.params.id)  
      .then(events => res.json(events))  
      .catch(err => res.status(400).json('Error: ' + err));  
  });  

  router.route('/:id').delete((req, res) => {  
    Event.findByIdAndDelete(req.params.id)  
      .then(() => res.json('Event deleted.'))  
      .catch(err => res.status(400).json('Error: ' + err));  
  });  
  router.route('/update/:id').post((req, res) => {  
    Event.findById(req.params.id)  
      .then(events => {  
        events.title = req.body.title;  
        events.description = req.body.description;  
        events.imageURL = req.body.imageURL;   Event.save()
       
        .then(() => res.json('Event updated!'))  
          .catch(err => res.status(400).json('Error: ' + err));  
      })  
      .catch(err => res.status(400).json('Error: ' + err));  
  });


module.exports = router;