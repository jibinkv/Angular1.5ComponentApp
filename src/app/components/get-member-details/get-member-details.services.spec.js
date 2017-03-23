(function (){
	'use strict';

	describe('Testing getMemberDetails Service', function (){
		var memberDetailsService, memberDetailsMock;

		beforeEach(module('Angular1.5ComponentApp'));
		
		beforeEach(inject(function(_memberDetailsService_, _memberDetailsMock_){
			memberDetailsMock = _memberDetailsMock_;
			memberDetailsService = _memberDetailsService_;
		}));

		describe('Testing getMemberInfo method', function(){
			it('getMemberInfo method should return member details', function(){	
				spyOn(memberDetailsService, 'getMemberInfo').and.returnValue(memberDetailsMock.success.payload.memberDetails);		
				var member = memberDetailsService.getMemberInfo();
				expect(member).toEqual(memberDetailsMock.success.payload.memberDetails);
			});
		});
	});
})();