const router = require('express').Router();
const History = require('../models/historyPage');



router.route('/').get((req, res) => {
    History.find()
        .then(histories => res.json(histories))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = (req.body.title);
    const description = (req.body.description);
    const imageURL = (req.body.imageURL);

    const newHistory = new History({
        title, 
        description, 
        imageURL
    });

    newHistory.save()
        .then(() => res.json('Historical location added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {  
    History.findById(req.params.id)  
      .then(histories => res.json(histories))  
      .catch(err => res.status(400).json('Error: ' + err));  
  });  

  router.route('/:id').delete((req, res) => {  
    History.findByIdAndDelete(req.params.id)  
      .then(() => res.json('Historical location deleted.'))  
      .catch(err => res.status(400).json('Error: ' + err));  
  });  
  router.route('/update/:id').post((req, res) => {  
    History.findById(req.params.id)  
      .then(histories => {  
        histories.title = req.body.title;  
        histories.description = req.body.description;  
        histories.imageURL = req.body.imageURL;   History.save()
       
        .then(() => res.json('Historical location updated!'))  
          .catch(err => res.status(400).json('Error: ' + err));  
      })  
      .catch(err => res.status(400).json('Error: ' + err));  
  });


module.exports = router;