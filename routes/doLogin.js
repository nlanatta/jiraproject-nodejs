import express from 'express';
import forms from 'forms';
import Session from './session';
import sessionExpress from 'express-session'; 
var MemoryStore = require('memorystore')(sessionExpress);

const router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var user = req.body.username;
    var password = req.body.password;

    console.log("setSession");
    function setSession(session) {
      console.log(session);
      console.log(session.session.name);
      console.log(session.session.value);
      if(req.session) {
        req.session.sessionName =  session.session.name;
        req.session.sessionValue =  session.session.value;
        req.session.save();
      }
    }
    const mySession = new Session(user, password, setSession);
    mySession.session;


    res.render('index', { title: 'SUCCESSFULL LOGIN' });
});

module.exports = router;
