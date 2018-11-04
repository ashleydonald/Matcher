let requestList = require('../data/requestList.js');
let providerList = require('../data/providerList.js');

module.exports = function (app) {

  // GET the provider applications
  app.get('/api/providerList', function (req, res) {
    res.json(providerList);
  });

  // GET the requests  
  app.get('/api/requestList', function (req, res) {
    res.json(requestList);
  });

  // Add the new requests to the requestsList array.
  app.post('/api/requestList', function (req, res) {
    requestList.push(req.body);
    res.end();
  });

  // Add the new providers to the providerList array.
  app.post('/api/providerList', function (req, res) {
    providerList.push(req.body);
    res.end();
  });
};