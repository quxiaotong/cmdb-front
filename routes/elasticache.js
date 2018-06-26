var express = require('express')
var router = express.Router()
var request = require('request')

/* GET users listing. */
router.get('/', function (req, res, next) {
  // var opts = {
  //   url: 'http://52.80.153.82:14500/v1/awsserver/elasticache',
  //   encoding: 'utf-8',
  //   method: 'get',
  //   json: true
  // }
  // request(opts, function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     res.render('elasticache', {
  //       aws_ec_data: body
  //     })
  //   }
  // })
  res.render('elasticache',);
})

module.exports = router
