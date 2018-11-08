var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('login',);
})
router.get('/index', function(req, res, next) {
    res.render('index',);
});
router.get('/v1/awsserver/ec2', function(req, res, next) {
    res.render('ec2',);
});
router.get('/v1/awsserver/rds/', function(req, res, next) {
    res.render('rds',);
});
router.get('/v1/awsserver/volume', function(req, res, next) {
    res.render('volume',);
});
router.get('/v1/awsserver/elb', function(req, res, next) {
    res.render('elb',);
});
router.get('/v1/awsserver/elasticache', function(req, res, next) {
    res.render('elasticache',);
});
router.get('/v1/awsserver/vpc', function(req, res, next) {
    res.render('vpc',);
});
router.get('/v1/awsserver/s3', function(req, res, next) {
    res.render('s3',);
});
router.get('/v1/awsserver/iam', function(req, res, next) {
    res.render('iam',);
});
router.get('/ec2/*', function(req, res, next) {
    res.render('detail_ec2',);
});
router.get('/v1/cloudwatch/ec2/*', function(req, res, next) {
    res.render('cloudwatch_ec2',);
});
router.get('/v1/cloudwatch/rds/*', function(req, res, next) {
    res.render('cloudwatch_rds',);
});
router.get('/v1/cloudwatch/elasticache/*', function(req, res, next) {
    res.render('cloudwatch_redis',);
});
router.get('/v1/apps', function(req, res, next) {
    res.render('apps',);
});
router.get('/v1/apps/guokr', function(req, res, next) {
    res.render('appsguokr',);
});
router.get('/v1/apps/fantuan', function(req, res, next) {
    res.render('appsfantuan',);
});
router.get('/v1/configmanage', function(req, res, next) {
    res.render('configmanage',);
});
router.get('/v1/sys_configmanage', function(req, res, next) {
    res.render('sys_configmanage',);
});
router.get('/v1/ops_configmanage', function(req, res, next) {
    res.render('ops_configmanage',);
});
router.get('/v1/wx_configmanage', function(req, res, next) {
    res.render('wx_configmanage',);
});
router.get('/v1/cmdb_user', function(req, res, next) {
    res.render('cmdb_user',);
});


module.exports = router;