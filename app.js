import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import index from './routes/index';
import findIssue from './routes/findIssue';
import jiraController from './routes/jiraController';
import login from './routes/login';
import doLogin from './routes/doLogin';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import stylus from 'stylus';
import hello from './routes/hello';

let app = express();

app.use(session({ secret: 'jiraProject',
                  resave: true,
                  saveUninitialized: true,
                  sessionName: '',
                  sessionValue: '',
                  cookie: { secure: false }   }));
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/findIssue', findIssue);
app.use('/jiraController', jiraController);
app.use('/login', login);
app.use('/doLogin', doLogin);
app.use('/hello', hello);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*
app.listen(3000, function () {
  console.log('Server starter on port 3000!')
});*/
// mount the router on the app
var router = express.Router();
app.use('/', router);
module.exports = app;
