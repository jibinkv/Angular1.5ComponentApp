(function (){
	'use strict';

	describe('Testing member-deatails-form Component', function (){
		var element, $scope, $rootScope, $compile;

		beforeEach(module('Angular1.5ComponentApp'));
		
		beforeEach(inject(function(_$rootScope_, _$compile_){
			$rootScope = _$rootScope_;
			$compile = _$compile_;
	        $scope = $rootScope.$new();
	        element = angular.element($compile('<member-details-form member=""></member-details-form>')($scope));
	        $rootScope.$digest();
		}));

		it('should render a form to the DOM', function(){
			expect(element.find('form').length).toBeGreaterThan(0);
		});

	});
})();