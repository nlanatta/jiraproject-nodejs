import express from 'express';

const router = express.Router();

/* GET Greetings test API. */
router.get('/', function(req, res, next) {
  res.json({ "API" : "HELLO FROM API"});
});

module.exports = router;