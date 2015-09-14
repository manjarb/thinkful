angular.module('waitStaffWithRouting', ['ngRoute'])
    .value('globalVar', {
      mealCount: 0,
      totalTip: 0,
      baseMeal: 0,
      taxRate: 0,
      tipPercent: 0,
      subTotal: 0,
      tip: 0,
      totalPrice: 0,
      totalTip: 0,
      mealCount: 0,
      avgTips: 0

    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'home.html',
            controller : 'HomeCtrl'
        }).when('/newMeal', {
            templateUrl : 'new_meal.html',
            controller : 'NewMealCtrl'
            // resolve : {
            //     city: function(owmCities, $route, $location) {
            //         var city = $route.current.params.city;
            //         city = city.replace('_', ' ');
            //         if(owmCities.indexOf(city) == -1 ) {
            //             $location.path('/error');
            //             return;
            //         }
            //         //return owmFindCity(city);
            //         return city;
            //     }
            // }
        }).when('/myEarnings', {
            templateUrl : 'my_earning.html',
            controller : 'MyEarningCtrl'
        }).when('/error', {
            template : '<p>Error - Page Not Found</p>'
        }).otherwise('/');
    }])
    .controller('HomeCtrl', function($scope) {
        //empty for now
    })
    .controller('NewMealCtrl', function($scope, globalVar) {

      $scope.baseMeal = globalVar.baseMeal;
      $scope.taxRate = globalVar.taxRate;
      $scope.tipPercent = globalVar.tipPercent;

      $scope.subTotal = globalVar.subTotal;
      $scope.tip = globalVar.tip;
      $scope.totalPrice = globalVar.totalPrice;

      $scope.totalTip = globalVar.totalTip;
      $scope.mealCount = globalVar.mealCount;
      $scope.avgTips = globalVar.avgTips;

        $scope.submitForm = function(){
          //alert('submit test');
          globalVar.baseMeal = $scope.baseMeal;
          globalVar.taxRate = $scope.taxRate;
          globalVar.tipPercent = $scope.tipPercent;

          $scope.subTotal = $scope.baseMeal + (($scope.taxRate / 100) * $scope.baseMeal);
          $scope.tip = (($scope.tipPercent / 100) * $scope.subTotal);
          $scope.totalPrice = $scope.subTotal + $scope.tip;

          globalVar.subTotal = $scope.subTotal;
          globalVar.tip = $scope.tip;
          globalVar.totalPrice = $scope.totalPrice;

          $scope.totalTip = $scope.totalTip + $scope.tip;

          $scope.mealCount = $scope.mealCount + 1;

          $scope.avgTips = $scope.totalTip / $scope.mealCount;

          globalVar.totalTip = $scope.totalTip;
          globalVar.mealCount = $scope.mealCount;
          globalVar.avgTips = $scope.avgTips;

          alert(globalVar.totalTip + ' ' + globalVar.mealCount + ' ' + globalVar.avgTips);
        }

        $scope.reset = function() {
          $scope.baseMeal = "";
          $scope.taxRate = "";
          $scope.tipPercent = "";

          globalVar.baseMeal = $scope.baseMeal;
          globalVar.taxRate = $scope.taxRate;
          globalVar.tipPercent = $scope.tipPercent;
        };
    })
    .controller('MyEarningCtrl', function($scope,globalVar) {

        $scope.mealCount = globalVar.mealCount;
        $scope.totalTip = globalVar.totalTip;
        $scope.avgTips = globalVar.avgTips;

        $scope.resetAll = function() {

          globalVar.baseMeal = 0;
          globalVar.taxRate = 0;
          globalVar.tipPercent = 0;

          globalVar.subTotal = 0;
          globalVar.tip = 0;
          globalVar.totalPrice = 0;

          $scope.mealCount = 0;
          $scope.totalTip = 0;
          $scope.avgTips = 0;

          globalVar.totalTip = $scope.mealCount;
          globalVar.mealCount = $scope.totalTip;
          globalVar.avgTips = $scope.avgTips;

          // $scope.waitStaffForm.$setPristine();
          // $scope.waitStaffForm.$setUntouched();
        };

    });