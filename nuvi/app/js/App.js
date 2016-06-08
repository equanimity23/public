var App = function(oContainer) {
	var _sUrl        = 'https://nuvi-challenge.herokuapp.com/activities',
		_$Refresh,
		_oActivities;

	var _initialize = function() {
			_$Refresh = $('<button class="refresh">Refresh</button>');
			$(oContainer).append(_$Refresh);

			_oActivities = new Activities(oContainer);

			_refresh();
			
			_$Refresh.click(function() { _refresh(); });
		},

		_refresh = function() {
			$.get(_sUrl, function(oActivities) {
				if (oActivities) {
					_oActivities.addActivities(oActivities);
					_oActivities.draw();
				}
			});
		};

	_initialize();
};