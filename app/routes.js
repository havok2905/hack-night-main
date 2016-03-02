var mongoose  = require('mongoose');
var GithubAPI = require('github');
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

  app.post('/github', function(request, response) {
    var github = new GithubAPI({version: '3.0.0'});
    var languages = {};

    github.authenticate({
      type: "oauth",
      key: '6f743235faeb17bb7656',
      secret: 'c19c92707442508de2ca6c9efc8e75612cdc4d8b'
    });

    github
      .repos
      .getFromUser(request.body, function(fromUserError, fromUserResponse) {
        fromUserResponse.forEach(function(repo) {
          if(!languages[repo.language]) {
            languages[repo.language] = 1;
          } else {
            languages[repo.language]++;
          }
        });

        response.json(languages);
      });
  });
}
