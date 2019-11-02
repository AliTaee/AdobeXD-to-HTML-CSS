import $ from 'jquery';
import DOMCACHE from './jQueryCashe';

$(document).ready(function () {
	DOMCACHE.get('.menu__hum').click(function(){
		DOMCACHE.get(this).toggleClass("menu__hum-item--active");
		DOMCACHE.get('.menu__ham-wrapper').toggleClass("active");
	  });
});