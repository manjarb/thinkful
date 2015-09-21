angular.module('editableDirective',[])
	.directive('makeEditable', function($sce) {
	  return {
			restrict: 'A',
			transclude: true,
			templateUrl: 'make-editable.html',
			scope: true
		}
	});
