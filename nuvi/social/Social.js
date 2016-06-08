var Social = new function() {

	this.like = function(oData) {
		switch (oData.provider) {
			case 'twitter':
				alert('like!');
				break;
			case 'facebook':
				break;
			case 'tumblr':
				break;
			case 'instagram':
				break;
			case 'reddit':
				break;
		}
	}

	this.reply = function(oData) {
		switch (oData.provider) {
			case 'twitter':
				alert('reply');
				break;
			case 'facebook':
				break;
			case 'tumblr':
				break;
			case 'instagram':
				break;
			case 'reddit':
				break;
		}
	}
}