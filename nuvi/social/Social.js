var Social = new function() {

	var _dummyRequest = function(oData, sAction, fCallback) {
			// In real project we connect to provider and send like or reply request
			// In callback on success response we display message to user

			// sProvider.sAction(oData, function() {
				fCallback(oData.provider);
			// });
		};


	this.like = function(oData, fCallback) {
		_dummyRequest(oData, 'like', fCallback);
	}

	this.reply = function(oData, fCallback) {
		_dummyRequest(oData, 'like', fCallback);
		// switch (oData.provider) {
		// 	case 'twitter':
		// 		alert('reply');
		// 		break;
		// 	case 'facebook':
		// 		break;
		// 	case 'tumblr':
		// 		break;
		// 	case 'instagram':
		// 		break;
		// 	case 'reddit':
		// 		break;
		// }
	}
}