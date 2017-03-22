(function (){
	'use strict';

	 angular.module('AngularJsHelloWorldApp')
	 	.controller('AboutController', AboutController);

	 function AboutController($scope){
	 	var vm = this;
	 	
	 	vm.message = "About AngularJSHelloWorldApp";
	 }

})();