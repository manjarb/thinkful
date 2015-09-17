angular.module('signupDirective',[])
	.directive('optIn', function() {
	    return {
	        template: '<div class="brand-logo"><div ng-transclude></div></div>',
	        restrict: 'E',
	        transclude: true,
	        replace: true
	    }
	});

