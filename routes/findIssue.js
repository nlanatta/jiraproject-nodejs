import express from 'express';
import unirest from 'unirest';
import Session from './session';

const router = express.Router();


router.get('/:issueKey', function(req, res, next) {
    console.log("findIssue");
    function callJira(sessionValue) {
      console.log(sessionValue);
      console.log(sessionValue.session.name);
      console.log(sessionValue.session.value);
      var Request = unirest.get('https://jira.registeredsite.com/rest/api/2/issue/'+req.params.issueKey);
      Request.headers({'Content-Type': 'application/json',
                        'cookie': sessionValue.session.name + '=' + sessionValue.session.value});
      Request.end(function (response) {
        console.log(response.body);
        res.json(response.body);
      });
    }
    console.log(Session);
    const mySession = new Session(callJira);
    mySession.getSession();
});

module.exports = router;
