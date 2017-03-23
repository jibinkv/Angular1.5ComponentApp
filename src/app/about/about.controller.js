(function (){
	'use strict';

	 angular.module('Angular1.5ComponentApp')
	 	.controller('AboutController', AboutController);

	 function AboutController($scope){
	 	var vm = this;
	 	
	 	vm.message = "About Angular1.5ComponentApp";
	 }

})();