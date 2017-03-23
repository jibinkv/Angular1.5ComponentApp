(function (){
	'use strict';

	 angular.module('Angular1.5ComponentApp')
	 	.controller('ContactController', ContactController);

	 function ContactController(){
	 	var vm = this;
	 	vm.message = "Contact Angular1.5ComponentApp";
	 }

})();