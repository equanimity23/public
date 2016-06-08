var Activity = function(oData, oContainer) {
	var _aKeys = [
			'actor_name',
			'actor_username',
			'actor_avator',
			'provider',
			'activity_message',
			'activity_url',
			'activity_attachment',
			'activity_date'
		],
		_$Element,
		_$ElementHead,
		_$ElementBody,
		_$ElementFoot,
		_$BtnLike,
		_$BtnReply,
		_sName       = oData.actor_name           || '',
		_sUserName   = '@' + oData.actor_username || '',
		_sAvatar     = oData.actor_avator         || '../assets/icon_no_image.gif',
		_sMessage    = oData.activity_message     || '',
		_sDate       = oData.activity_date        || '',
		_sUrl        = oData.activity_url         || '',
		_sProvider   = oData.provider,
		_sAttachment = oData.activity_attachment,
		_sDisplayUrl = _sUrl.length < 40 ? _sUrl : _sUrl.substr(0, 40) + '&hellip;';

	var _onBtnLikeClick	= function() {
			Social.like(oData);
		},

		_onBtnReplyClick = function() {
			Social.reply(oData);
		},

		_debug = function() {
			console.group(oData.actor_name);
			// for (var n=0; n<_aKeys.length; n++) {
			// 	sKey = _aKeys[n];
			// 	console.log(sKey, oData[sKey]);
			// }
			for (var sKey in oData) {
				console.log(sKey, oData[sKey]);
			}
			console.groupEnd();
		};

	_debug();

	/*********************** PUBLIC ***********************/

	this.draw = function() {
		var sKey,
			n;

		_$Element = $(
			'<div class="activity">'             +
				'<div class="block head">'       +
					'<div class="avatar" />'     +
					'<div class="name_wrapper">' +
						'<div class="name">'     + _sName     + '</div>' +
						'<div class="username">' + _sUserName + '</div>' +
					'</div>'                     +
				'</div>'                         +
				'<div class="block body">'       +
					'<div class="wrapper">'      +
						'<div class="token via">via </div>'      +
						'<div class="provider '              + _sProvider    + '"/>'     +
						'<div class="token on">on </div>'       +
						'<div class="date">'                 + _sDate        + ':</div>' +
					'</div>'                                 +
					'<div class="attachment" />'             +
					'<div class="message">'                  + _sMessage     + '</div>'  +
					'<a href = "' + _sUrl + '" class="url">' + _sDisplayUrl  + '</a>'    +
				'</div>'                            +
				'<div class="block foot">'          +
					'<div class="btn btn_like" />'  +
					'<div class="btn btn_reply" />' +
				'</div>'                            +
			'</div>'
		);

		_$Avatar     = _$Element.find('.avatar').css({ 'background-image' : 'url(' + _sAvatar + ')' });
		_$Attachment = _$Element.find('.attachment');
		_$Provider	 = _$Element.find('.provider');
		_$Date       = _$Element.find('.date');
		_$TokenVia   = _$Element.find('.via');
		_$TokenOn    = _$Element.find('.on');

		if (_sAttachment) {
			_$Attachment.css({ 'background-image' : 'url(' + _sAttachment + ')' });
		} else {
			_$Attachment.hide();
		}

		if (!_sProvider) {
			_$TokenVia.hide();
			_$Provider.hide();
		}

		if (!_sDate) {
			_$TokenOn.hide();
			_$Date.hide();
		}

		_$BtnLike   = _$Element.find('.btn_like');
		_$BtnReply  = _$Element.find('.btn_reply');

		_$BtnLike.on('click',  _onBtnLikeClick);
		_$BtnReply.on('click', _onBtnReplyClick);

		$(oContainer).append(_$Element);
	};

	this.getData         = function() { return oData; }
	this.getActivityDate = function() { return oData.activity_date; }
}