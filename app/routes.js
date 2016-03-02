var mongoose  = require('mongoose');
var GithubAPI = require('github');
var Job       = require('./model.js');

module.exports = function(app) {
  app.post('/job', function(request, response) {
    Job.findById(request.body.id, function(error, job) {
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

    github.authenticate({
      type: "oauth",
      key: '6f743235faeb17bb7656',
      secret: 'c19c92707442508de2ca6c9efc8e75612cdc4d8b'
    });

    github
      .repos
      .getFromUser(request.body, function(fromUserError, fromUserResponse) {

        var languages = {};

        fromUserResponse.forEach(function(repo) {

          if(repo.language) {
            var langName = repo.language.toLowerCase();

            if(languages[langName] === undefined) {
              languages[langName] = 0;
            } else {
              languages[langName]++;
            }  
          }
        });

        response.json(languages);
      });
  });
}
