var profile = {

	//_skills is a associative array.  Key is skillName, value is array on ratings (integers) 
	function init(skillArr) {
		this._qualifications = skillArr;
	}

	function compare(jobProfile) {
		var results;
		var jobQualifications = jobProfile.getQualifications();

		var score = 0;
		var normalizedScore = 0;
		for (var key in jobQualifications) {
			if(this._qualifications.hasKey(key)) {
				score += compareSkill(key, jobQualifications);
			}
		}
		normalizedScore = score/jobProfile.length;
		return normalizedScore;
	}

	function compareSkill(key, jobQualifications) {
		return this._qualifications[key]/jobProfile[key];
	}

	function getQualifications() {
		return this._qualifications;
	}
}