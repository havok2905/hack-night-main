app.factory('githubFactory', function($http) {

  function getLanguageStats(user) {
    return $http.post('/github', {
      user: user,
      per_page: 100
    });
  }

  return {
    getLanguageStats: getLanguageStats
  };

});
