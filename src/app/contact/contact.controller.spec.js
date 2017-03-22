(function(){
	'use strict';

	describe('Testing ContactController', function(){

		beforeEach(module('AngularJsHelloWorldApp'));

		var $rootScope, $scope, $controller;
		beforeEach(module('AngularJsHelloWorldApp'));

		beforeEach(inject(function(_$rootScope_, _$controller_){
			$rootScope = _$rootScope_;
			$controller = _$controller_;
			$scope = $rootScope.$new();
			$controller('ContactController as vm', {
				$scope: $scope
			});
		}));

		it('should exist', function (){
			expect($scope).toBeDefined();
		});

		it('should define a scope variable and contain a string Contact', function (){
			expect($scope.vm.message).toBeDefined();
			expect($scope.vm.message).toContain('Contact');
		});

	});
})();