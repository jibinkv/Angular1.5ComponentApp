(function (){
	'use strict';

	 angular.module('Angular1.5ComponentApp')
	 	.controller('HomeController', HomeController);

	 function HomeController(){
	 	var vm = this;

	 	vm.message = "Welcome to Angular1.5ComponentApp";
	 }

})();