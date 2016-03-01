var mongoose  = require('mongoose');
var Job       = require('./model.js');

module.exports = function(app) {
  app.get('/job', function(request, response) {
    Job.findById('', function(error, job) {
      if(error){ response.send(error); }
      response.json(job);
    });
  });

  app.get('/jobs', function(request, response) {
    var query = Job.find({});

    query.exec(function(error, jobs) {
      if(error){ response.send(error); }
      response.json(jobs);
    });
  });

  app.post('/jobs', function(request, response) {
    var newJob = new Job(request.body);

    newJob.save(function(error) {
      if(error){ response.send(error); }
      response.json(request.body);
    })
  });
}
