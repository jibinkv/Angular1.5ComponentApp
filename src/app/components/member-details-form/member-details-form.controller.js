(function(){
	'use strict';

	angular.module('AngularJsHelloWorldApp')
	.controller('memberDetailsController', memberDetailsController);

	function memberDetailsController(){
		this.memberDetailsForm = {};
		this.currentMember = {};

		this.$onInit = function (){
			this.currentMember = this.member;
		};
	}

})();