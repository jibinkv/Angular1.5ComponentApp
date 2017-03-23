(function(){
	'use strict';

	angular.module('Angular1.5ComponentApp')
	.controller('memberDetailsController', memberDetailsController);

	function memberDetailsController(){
		this.memberDetailsForm = {};
		this.currentMember = {};

		this.$onInit = function (){
			this.currentMember = this.member;
		};
	}

})();