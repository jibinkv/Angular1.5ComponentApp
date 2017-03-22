(function (){
	'use strict';

	angular
		.module('AngularJsHelloWorldApp')
			.component('memberDetailsForm', {
			bindings: {
				member: '='
			},
			templateUrl: 'app/components/member-details-form/member-details-form.html',
			controller: 'memberDetailsController as vm'
	});
})();
