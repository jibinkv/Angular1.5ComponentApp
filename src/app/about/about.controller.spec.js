(function(){
	'use strict';

	describe('Testing about controller', function(){

		beforeEach(module('Angular1.5ComponentApp'));

		var $rootScope, $scope, $controller;
		beforeEach(module('Angular1.5ComponentApp'));

		beforeEach(inject(function(_$rootScope_, _$controller_){
			$rootScope = _$rootScope_;
			$controller = _$controller_;
			$scope = $rootScope.$new();
			$controller('AboutController as vm', {
				$scope: $scope
			});
		}));

		it('should exist', function (){
			expect($scope).toBeDefined();
		});

		it('should define a scope variable and contain a string "About" ', function (){
			expect($scope.vm.message).toBeDefined();
			expect($scope.vm.message).toContain('About');
		});

	});
})();