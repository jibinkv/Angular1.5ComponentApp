(function (){
	'use strict';

	 angular.module('AngularJsHelloWorldApp')
	 	.controller('MemberController', MemberController);

	 function MemberController(memberDetailsService){
	 	var vm = this;
	 	vm.memberInfo = {};

	 	activate();

	 	function activate(){
	 		vm.memberInfo = memberDetailsService.getMemberInfo();
	 	}
	 }

})();