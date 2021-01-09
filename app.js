const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');
const hbLayouts = require('handlebars-layouts');
const helmet = require('helmet');

const indexRouter = require('./app/routes/pages');
const partRouter = require('./app/routes/partners');
const reqRouter = require('./app/routes/requirements');
const appRouter = require('./app/routes/applications');
// const usersRouter = require('./app/routes/users');

const app = express();

hbs.registerPartials(`${__dirname}/app/views/partials`);
hbLayouts.register(hbs.handlebars);

// view engine setup
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layout' });

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.disable('etag').disable('x-powered-by');

// TODO: Try replacing with webpack
// app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));

app.use('/', indexRouter);
app.use('/partners', partRouter);
app.use('/requirements', reqRouter);
app.use('/applications', appRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
