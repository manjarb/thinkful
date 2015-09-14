angular.module('waitStaff', [])
    .controller('MyCtrl', function($scope) {

        $scope.mealCount = 0;
        $scope.totalTip = 0;

        $scope.submitForm = function(){
          //alert('submit test');

          $scope.subTotal = $scope.baseMeal + (($scope.taxRate / 100) * $scope.baseMeal);
          $scope.tip = (($scope.tipPercent / 100) * $scope.subTotal);
          $scope.totalPrice = $scope.subTotal + $scope.tip;

          $scope.totalTip = $scope.totalTip + $scope.tip;

          $scope.mealCount = $scope.mealCount + 1;

          $scope.avgTips = $scope.totalTip / $scope.mealCount;
        }

        $scope.resetAll = function() {

          $scope.mealCount = 0;
          $scope.totalTip = 0;
          $scope.baseMeal = 0;
          $scope.taxRate = 0;
          $scope.tipPercent = 0;

          $scope.subTotal = "";
          $scope.tip = "";
          $scope.totalPrice = "";
          $scope.totalTip = 0;
          $scope.avgTips = 0;

          $scope.waitStaffForm.$setPristine();
          $scope.waitStaffForm.$setUntouched();
        };

        $scope.reset = function() {
          $scope.baseMeal = "";
          $scope.taxRate = "";
          $scope.tipPercent = "";
        };
    });