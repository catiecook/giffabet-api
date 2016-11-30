var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:letter', function(req, res, next) {

  var options = {
    root: __dirname + '/../public/letters'
    }
  };

  res.sendFile(req.params.letter + '.json', options, function(err){
    if (err) {
          console.log(err);
          res.status(err.status).end();
        }
        else {
          console.log('Sent:', req.params.letter);
        }
  });
});

module.exports = router;
