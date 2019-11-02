import $ from 'jquery';
let DOMCACHESTORE = {};
let DOMCACHE;
export default DOMCACHE = {
	get: function (selector, force) {
		if (DOMCACHESTORE[selector] !== undefined && force === undefined) {
			return DOMCACHESTORE[selector];
		}

		DOMCACHESTORE[selector] = $(selector);
		return DOMCACHESTORE[selector];
	}
};