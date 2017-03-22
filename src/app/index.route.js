(function (){
	'use strict';

	 angular.module('AngularJsHelloWorldApp')
  		.config(routeConfig);

  	function routeConfig($locationProvider, $routeProvider){
  	  $locationProvider.html5Mode(true);
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "app/home/home.html",
          controller: "HomeController",
          controllerAs: "vm"
        })
        .when("/contact", {
          templateUrl: "app/contact/contact.html",
          controller: "ContactController",
          controllerAs: "vm"
        })
        .when("/member", {
          templateUrl: "app/member/member.html",
          controller: "MemberController",
          controllerAs: "vm"
        })
        .when("/about", {
          templateUrl: "app/about/about.html",
          controller: "AboutController",
          controllerAs: "vm"
        })
        .otherwise({
           redirectTo: '/'
        });
  	}

})();