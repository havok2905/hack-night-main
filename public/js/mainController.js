app.controller('mainController', function($scope, githubFactory, jobFactory, comparisonFactory) {

  $scope.languages = {};

  jobFactory.getJobs()
            .success(function(data) { $scope.jobs = data; })
            .error(function(error) { console.log(error); });

  $scope.getUserLanguages = function() {
    var username = $scope.github.username;

    githubFactory.getLanguageStats(username)
                 .success(function(data) {
                   console.log(data);
                 })
                 .error(function(error) {
                   console.log(error);
                 });
  }

  $scope.createJob = function() {
    var form = $scope.jobForm;
    var job  = jobFactory.jobFromForm(form);

    jobFactory.postJob(job)
              .success(function(data) {
                jobFactory.resetJobForm(form);
                $scope.jobs.push(data);
              })
              .error(function(data) {
                console.log(data);
              });
  };

});
