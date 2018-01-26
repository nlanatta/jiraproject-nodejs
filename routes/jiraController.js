import express from 'express';
import app from '../app';
import unirest from 'unirest';
import Session from './session';
const router = express.Router();


router.get('/issue/:issue/:cookie', function(req, res, next) {
    var Request = unirest.get('https://jira.registeredsite.com/rest/api/2/issue/'+req.params.issue);
      Request.headers({'Content-Type': 'application/json',
                        'cookie': req.params.cookie//req.session.sessionName+"="+req.session.sessionValue
                      });
      Request.end(function (response) {
        console.log(response.body);
        res.json(response.body);
      });
});

module.exports = router;