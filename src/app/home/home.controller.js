(function (){
	'use strict';

	 angular.module('AngularJsHelloWorldApp')
	 	.controller('HomeController', HomeController);

	 function HomeController(){
	 	var vm = this;

	 	vm.message = "Welcome to AngularJSHelloWorldApp";
	 }

})();