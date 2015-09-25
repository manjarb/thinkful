//var calenherModule = angular.module('calendarDemoApp', []);

// your controller and directive code go here
angular.module('calendarDemoApp', [])
  .controller('calenderCtrl', function($scope) {
  	var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();

    $scope.date = {
      year : year,
      month : month
    };

    //visually delineated from the days in the current month
    $scope.isCurrentMonth = function(date) {
        //console.log(date)
        return date.getMonth() == $scope.date.month;
      }

    var years = [];

    //display up to 20 years in the past, and 20 years in the future.
    var then = year - 20;
    for(var i=then;i<=year+20;i++) {
      years.push(i);
    }

  	$scope.years = years;

  	//display the current month.
  	$scope.months = ('january,february,march,april,' +
                      'may,june,july,august,' +
                      'september,october,november,december').split(',');


  	//drop down menu should allow you to choose a month and year to display
  	//select a new month/year, the calendar grid should update.
  	$scope.$watchCollection('date', function(date) {
        $scope.currentDate = new Date(date.year, date.month, 1);
        //console.log($scope.date)
      });

  })
  .directive('myCalendar', function() {
  	return {
  		transclude : 'element',
      priority : 1000,
  		link : function(scope, element, attrs, ctrl, transclude){

        var containerScope = scope.$new();
        var container = angular.element('<div></div>');

        container.addClass('calendar-container');
        element.after(container);

        //select a new month/year, the calendar grid should update.
        scope.$watch(attrs.myCalendar, function(date) {
          if(!date) return;

          var range = CalendarRange.getMonthlyRange(date);

          containerScope.$destroy();
          containerScope = scope.$new();
          container.html('');

          //The calendar should display as many rows for weeks as required for the month.
          //The left most cell is for Sundays, and the right most for Saturdays.
          //Any padded days from the previous/next month should be
          angular.forEach(range.days, function(day) {

            var newScope = containerScope.$new();
            newScope.day = day;

            transclude(newScope, function(newElement) {
              newElement.addClass('calendar-cell');
              container.append(newElement);
            });
          });

        })

  		}
  	}

  });