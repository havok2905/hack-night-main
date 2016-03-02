app.factory('comparisonFactory', function($http) {

  function run(job, user) {


    var totalScore = 0;
    var normalizedScore = 0;

    var keys = Object.keys(job).filter(function(key) {
      return (key in user && user[key] !== null);
    });

    keys.forEach(function(key) {
      if(key in user && user[key] !== null) {
        var score = user[key]/job[key];
        if(score > 1)
          score = 1;
          totalScore += score;
          console.log(score, totalScore);
      }
    });

    normalizedScore = totalScore/keys.length;

    return normalizedScore;
  }

  return {
    run, run
  };

});
