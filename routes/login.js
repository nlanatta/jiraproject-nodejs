import express from 'express';
import app from '../app';

const router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
    var user = req.body.user;
    var password = req.body.password;

    console.log("setSession");
    function callJira(setSession) {
      console.log(sessionValue);
      console.log(sessionValue.session.name);
      console.log(sessionValue.session.value);

      app.set('trust proxy', 1) // trust first proxy
      app.use(session({
         secret: 'keyboard cat',
         resave: false,
         saveUninitialized: true,
         cookie: { secure: true,
                   cookie: sessionValue.session.name + '=' + sessionValue.session.value }
      }))

      /*var Request = unirest.get('https://jira.registeredsite.com/rest/api/2/issue/'+req.params.issueKey);
      Request.headers({'Content-Type': 'application/json',
                        'cookie': sessionValue.session.name + '=' + sessionValue.session.value});
      Request.end(function (response) {
        console.log(response.body);
        res.json(response.body);
      });*/
    }
    console.log(Session);
    const mySession = new Session(user, password, setSession);
    mySession.getSession();


    res.render('index', { title: 'Jira' });
});

module.exports = router;
