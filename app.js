var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var loginRouter = require('./routes/login');
var indexRouter = require('./routes/index');
var ec2Router = require('./routes/ec2');
var elasticacheRouter = require('./routes/elasticache');
var elbRouter = require('./routes/elb');
var iamRouter = require('./routes/iam');
var rdsRouter = require('./routes/rds');
var s3Router = require('./routes/s3');
var volumeRouter = require('./routes/volume');
var vpcRouter = require('./routes/vpc');
var cloudwatchec2Router = require('./routes/cloudwatch_ec2');
var cloudwatchredisRouter = require('./routes/cloudwatch_redis');
var cloudwatchrdsRouter = require('./routes/cloudwatch_rds');
var appRouter = require('./routes/apps');
var appguokrRouter = require('./routes/appsguokr');
var appfantuanRouter = require('./routes/appsfantuan');
var configmanage = require('./routes/configmanage');
var ops_configmanage = require('./routes/ops_configmanage');
var wx_configmanage = require('./routes/wx_configmanage');
var cmdb_user = require('./routes/cmdb_user');
var ec2detailRouter = require('./routes/detail_ec2')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/ec2', ec2detailRouter);
app.use('/', loginRouter);
app.use('/v1/cloudwatch/ec2/', cloudwatchec2Router);
app.use('/v1/cloudwatch/rds/', cloudwatchrdsRouter);
app.use('/v1/cloudwatch/elasticache/', cloudwatchredisRouter);
app.use('/index', indexRouter);
app.use('/v1/awsserver/ec2', ec2Router);
app.use('/v1/awsserver/volume', volumeRouter);
app.use('/v1/awsserver/iam', iamRouter);
app.use('/v1/awsserver/elb', elbRouter);
app.use('/v1/awsserver/elasticache', elasticacheRouter);
app.use('/v1/awsserver/vpc', vpcRouter);
app.use('/v1/awsserver/s3', s3Router);
app.use('/v1/awsserver/rds', rdsRouter);
app.use('/v1/apps', appRouter);
app.use('/v1/apps/guokr', appguokrRouter);
app.use('/v1/apps/fantuan', appfantuanRouter);
app.use('/v1/configmanage', configmanage);
app.use('/v1/ops_configmanage', ops_configmanage);
app.use('/v1/wx_configmanage', wx_configmanage);
app.use('/v1/cmdb_user', cmdb_user);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
