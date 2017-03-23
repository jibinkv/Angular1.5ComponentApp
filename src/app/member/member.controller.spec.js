(function(){
	'use strict';

	describe('Testing MemberController', function(){

		beforeEach(module('Angular1.5ComponentApp'));

		var $rootScope, $scope, $controller, memberDetailsService;

		beforeEach(module('Angular1.5ComponentApp'));

		beforeEach(inject(function(_$rootScope_, _$controller_, _memberDetailsService_){
			memberDetailsService = _memberDetailsService_;
			$rootScope = _$rootScope_;
			$controller = _$controller_;
			$scope = $rootScope.$new();
			$controller('MemberController as vm', {
				$scope: $scope
			});
		}));

		it('should exist', function (){
			expect($scope).toBeDefined();
		});

		it('should get call memberDetailsService and get member details', function (){
			spyOn(memberDetailsService, 'getMemberInfo').and.callThrough();
			memberDetailsService.getMemberInfo();
			expect(memberDetailsService.getMemberInfo).toHaveBeenCalled();
			expect($scope.vm.memberInfo).toBeDefined();
		});

	});
})();