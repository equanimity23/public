var Activities = function(oContainer) {
	var _aActivities = [],
		_aIds        = [],
		_oActivity;

	var _hasActivity = function(nId) {
			return $.inArray(nId, _aIds) > -1;
		},

		_createActivity = function(oActivity) {
			_aIds.push(oActivity.id);
			return new Activity(oActivity, oContainer);
		},

		_createActivities = function(aActivities) {
			for (var n=0; n<aActivities.length; n++) {
				if (!_hasActivity(aActivities[n].id)) {
					_oActivity = _createActivity(aActivities[n]);
					_aActivities.push(_oActivity);
				}
			}
			_sortByDate('a');
		},

		_sortByDate = function(s) {
			s = s || 'd';
			if (s == 'a') {
				_aActivities.sort(function(a,b) { 
					return (new Date(a.getActivityDate()).getTime() - new Date(b.getActivityDate()).getTime());
				});
			} else if (s == 'd') {
				_aActivities.sort(function(a,b) { 
					return (new Date(b.getActivityDate()).getTime() - new Date(a.getActivityDate()).getTime());
				});
			}
		};

/*********************** PUBLIC ***********************/

	this.addActivities = function(aActivities) {
		_createActivities(aActivities);
	}

	this.draw = function() {
		for (var n=0; n<_aActivities.length; n++) {
			_aActivities[n].draw();
		}
	}
}