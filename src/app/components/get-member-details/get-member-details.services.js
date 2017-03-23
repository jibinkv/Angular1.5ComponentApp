(function (){
	'use strict';

	angular
		.module('Angular1.5ComponentApp')
		.factory('memberDetailsService', memberDetailsService);

	function memberDetailsService(memberDetailsMock){

		var service = {
			getMemberInfo : getMemberInfo
		};

		function getMemberInfo(){
			return memberDetailsMock.success.payload.memberDetails;
		}

		return service;
	}

})();