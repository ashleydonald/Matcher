let requests = require('../data/requestList.js');
let applications = require('../data/providerList.js');

module.exports = function (app) {

  /**
   * GET the waitlist
   */
  app.get('/api/applications', function (req, res) {
    res.json(applications);
  });

  /**
   * GET the requests 
   */
  app.get('/api/requests', function (req, res) {
    res.json(requests);
  });

  /**
   * If there are fewer than 5 reservations, add the new reservation to the requests
   * Otherwise add the new reservation to the waitlist
   */
  app.post('/api/requests', function (req, res) {
    if (requests.length < 5) {
      requests.push(req.body); 
    } else {
      applications.push(req.body);
    }

    res.end();
  });
}
