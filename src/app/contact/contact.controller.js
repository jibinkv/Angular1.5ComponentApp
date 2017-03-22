(function (){
	'use strict';

	 angular.module('AngularJsHelloWorldApp')
	 	.controller('ContactController', ContactController);

	 function ContactController(){
	 	var vm = this;
	 	vm.message = "Contact AngularJSHelloWorldApp";
	 }

})();