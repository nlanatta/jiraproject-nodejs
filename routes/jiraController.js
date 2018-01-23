import express from 'express';
import app from '../app';
import unirest from 'unirest';
import Session from './session';
const router = express.Router();


router.get('/issue/:issueKey', function(req, res, next) {
    console.log(req.session);
    var Request = unirest.get('https://jira.registeredsite.com/rest/api/2/issue/'+req.params.issueKey);
      Request.headers({'Content-Type': 'application/json',
                        'cookie': req.session.sessionName+"="+req.session.sessionValue});
      Request.end(function (response) {
        console.log(response.body);
        res.json(response.body);
      });
});

module.exports = router;