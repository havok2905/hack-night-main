app.factory('jobFactory', function($http) {

  function jobFromForm(jobData) {
    return {
      name:       jobData.name,
      html:       parseInt(jobData.html),
      css:        parseInt(jobData.css),
      javascript: parseInt(jobData.javascript),
      php:        parseInt(jobData.php),
      ruby:       parseInt(jobData.ruby),
      java:       parseInt(jobData.java),
      c:          parseInt(jobData.c),
      python:     parseInt(jobData.python)
    };
  }

  function resetJobForm(jobData) {
    jobData.name = '';
    jobData.html = '';
    jobData.css = '';
    jobData.javascript = '';
    jobData.php = '';
    jobData.ruby = '';
    jobData.java = '';
    jobData.c = '';
    jobData.python = '';

    return jobData;
  }

  function getJobs() {
    return $http.get('/jobs');
  }

  function postJob(job) {
    return $http.post('/jobs', job);
  }

  return {
    jobFromForm: jobFromForm,
    resetJobForm: resetJobForm,
    getJobs: getJobs,
    postJob: postJob
  };

});
