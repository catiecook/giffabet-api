var express = require('express');
var router = express.Router();

//******************
// Function to animate letter

function getLetter(letter) {

  var animateLetter = {
    container: $('#letter'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: __dirname + '/../public/letters/' + letter + '.json'
  };

  var anim = bodymovin.loadAnimation(animateLetter);
}

//******************
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {title: "Giffabet"})
});

//******************
/* GET letter json data. */
router.get('/:letter', (req, res, next) => {

  var options = {
    root: __dirname + '/../public/letters'
    }

  res.sendFile(req.params.letter + '.json', options, (err) => {
    if (err) {
          console.log(err);
          res.status(err.status).end();
        }
        else {
          console.log('Sent:', req.params.letter);
        }
  })
});

//******************
/* GET letter animation */
router.get('/view/:letter', (req, res, next) => {

  console.log("made it to letter file")

      res.render('view', {
        letter: req.params.letter
      })
});

module.exports = router;
