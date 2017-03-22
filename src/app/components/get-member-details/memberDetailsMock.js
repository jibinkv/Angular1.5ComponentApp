(function (){
	'use strict';

	var memberInfo = {
        "Id": "1",
        "Address": "2334 East St",
        "BirthDate": "03-05-1990",
        "EmailAddress": "abc@abc.com",
        "Gender": "M",
        "Occupation": "Manager",
        "MaritalStatus": "Single",
	    "FirstName": "Foo",
	    "Initials": "F",
	    "LastName": "Blah",
	    "MiddleName": "",
	    "NickName": "",
	    "Prefix": "",
	    "Suffix": "",
	    "Title": "",
	    "Phone": "3454565646"
	  };


	angular.module('AngularJsHelloWorldApp')
	.constant('memberDetailsMock', {
		'failure': {
			        'Acknowledgement': {
			          'Message': 'Error processing request...',
			          'Code': 'TE-1000'
			        },
			        'success': false
			      },
     	'success': {
			        'payload': {
			          'memberDetails': memberInfo
			        },
			        'acknowledgement': {
			          'Message': 'Successful',
			          'Code': 'SU-1000'
			        },
			        'success': true
			      }
	});
})();