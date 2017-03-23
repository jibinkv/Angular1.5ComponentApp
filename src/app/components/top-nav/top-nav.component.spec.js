(function (){
	'use strict';

	describe('Testing topNav Component', function (){
		var element, $scope, $rootScope, $compile;

		beforeEach(module('Angular1.5ComponentApp'));

		beforeEach(inject(function(_$rootScope_, _$compile_){
			$rootScope = _$rootScope_;
			$compile = _$compile_;
	        $scope = $rootScope.$new();
	        element = angular.element($compile('<top-nav></top-nav>')($scope));
	        $rootScope.$digest();
		}));

		it('should render top nav to dom', function(){
			expect(element.find('ul').length > 0).toBe(true);
			expect(element.find('li').length > 0).toBe(true);
		});

	});

})();