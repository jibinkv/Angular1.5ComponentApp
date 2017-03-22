(function (){
	'use strict';

	describe('Testing memberform Component', function (){
		var element, $scope, $rootScope, $compile, controller, memberDetailsMock;

		beforeEach(module('AngularJsHelloWorldApp'));
		
		beforeEach(inject(function(_$rootScope_, $controller, _memberDetailsMock_, $compile){
			memberDetailsMock = _memberDetailsMock_;
			$rootScope = _$rootScope_;
	        $scope = $rootScope.$new();
	        element = angular.element($compile('<member-details-form member="$ctrl.member"></member-details-form>')($scope));
	        $rootScope.$digest();
	        controller = $controller('memberDetailsController', { $scope: $scope}, {member: memberDetailsMock.success.payload.memberDetails}); 
	        
		}));

		it('should have member bound', function(){			
			controller.$onInit();
			expect(controller).toBeDefined();
			expect(controller.member).toBeDefined();
			expect(controller.currentMember).toBeDefined();
			expect(controller.member).toEqual(memberDetailsMock.success.payload.memberDetails);
		});


	});
})();