var App = function(oContainer) {
	var _sUrl        = 'https://nuvi-challenge.herokuapp.com/activities',
		_$Refresh,
		_$Message,
		_$MessageBody,
		_$Provider,
		_$ButtonClose,
		_oActivities,
		_bMessageDisplayed = false;

	var _initialize = function() {
				_$Refresh = $('<button class="refresh">Refresh</button>');
				_$Screen  = $('<div class="screen" />');
				_$Message = $(
						'<div class="message">'
					+		'<div class="message_head">'
					+			'<div class="provider" />'
					+			'<div class="button_close" />'	
					+		'</div>'	
					+		'<div class="message_body"></div>'
					+	'</div>'
				);

				_$Provider    = _$Message.find('.provider');
				_$MessageBody = _$Message.find('.message_body');
				_$ButtonClose = _$Message.find('.button_close');

				$(oContainer).append(_$Refresh);
				_$Screen.append(_$Message);
				$(oContainer).append(_$Screen);

				_oActivities = new Activities(oContainer);
				_refresh();
				
				_$Refresh.on('click', function() { _refresh(); });

				_$ButtonClose.on('click', function() { 
					_$Screen.hide();
					_bMessageDisplayed = false;
				});

				$(document).keyup(function(oEvent) {
					if (oEvent.keyCode == 27) {
						if (_bMessageDisplayed) {
							_$Screen.hide();
						}
					}
				});

			},

			_refresh = function() {
				$.get(_sUrl, function(oActivities) {
					if (oActivities) {
						_oActivities.addActivities(oActivities);
						_oActivities.draw();
					}
				});
			};

		/*********************** PUBLIC ***********************/

		this.onLike = function(oData) {
			Social.like(oData, function(sProvider) {
				App.displayMessageLike(sProvider);
			});
		}

		this.displayMessageLike = function(sProvider) {
			_$Provider.addClass(sProvider);
			_$MessageBody.html('Your like has been posted');
			_$Screen.show();
			_bMessageDisplayed = true;
		}

	_initialize();

};