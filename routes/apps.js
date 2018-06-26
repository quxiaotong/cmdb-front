var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
  // var opts = {
  //   url: 'http://52.80.153.82:14500/v1/awsserver/ec2',
  //   encoding: 'utf-8',
  //   method: 'get',
  //   json: true
  // }
  // request(opts, function (error, response, body) {
  //   console.log(body)
  //   if (!error && response.statusCode == 200) {
  //     res.render('ec2', {
  //       aws_ec2_data: body
  //     })
  //   }
  // })
    res.render('apps',);
})

module.exports = router;