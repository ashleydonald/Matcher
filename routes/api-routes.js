let requestList = require('../data/requestList.js');
let providerList = require('../data/providerList.js');

module.exports = function (app) {

  /**
   * GET the applications
   */
  app.get('/api/providerList', function (req, res) {
    res.json(providerList);
  });

  /**
   * GET the requests 
   */
  app.get('/api/requestList', function (req, res) {
    res.json(requestList);
  });

  /**
   * If there are fewer than 5 requests, add the new requests to the requests
   */
  app.post('/api/requestList', function (req, res) {
    if (requestList.length < 5) {
      requestList.push(req.body); 
    } else {
      requestList.push(req.body);
    }

    res.end();
  });


  app.post('/api/providerList', function (req, res) {
    if (requestList.length < 5) {
      providerList.push(req.body); 
    } else {
      providerList.push(req.body);
    }

    res.end();
  });
};