angular.module('igSearch', ['ngMessages','ngAnimate'])
    .controller('MyCtrl', function($scope,$http) {

        //$scope.shomSearchTag = true;
        // $scope.photosCount = 0;
        // $scope.photoResult = 10;

        $scope.submitTag = function(){
          //$scope.photoResult = 0;

          alert('submit tag');

          $scope.searchDisplay = $scope.searchTag;

          var url = "https://api.instagram.com/v1/tags/"+ $scope.searchTag +"/media/recent";

          var request = {
            callback: 'JSON_CALLBACK',
            client_id: '8138dfedd5df4e5fa5cec8cf21afea3b'
          };

          $http({
            method: 'JSONP',
            url: url,
            params: request
          })
          .then(function(result) {
            //$scope.analysis = result.data;
            //alert(angular.toJson(result.data));

            $scope.searchTag = "";
            $scope.searchResults = result.data.data;
            $scope.photoResult = $scope.searchResults.length
            alert(photoResult)
            //alert($scope.searchResults);
            
            $scope.igFormInput.$setPristine();
            $scope.igFormInput.$setUntouched();
          },
          function(result) {
            alert('Search fail');
          });
        };

        $scope.reset = function() {
          $scope.female_name = "";
          $scope.job_title = "";
          $scope.tedious_task = "";
          $scope.dirty_task = "";
          $scope.female_name2 = "";
          $scope.celebrity = "";
          $scope.useless_skill = "";
          $scope.adjective = "";
          $scope.obnoxiuous_celbertity = "";
          $scope.dirty_task = "";
          $scope.huge_number = "";

          $scope.myForm.$setPristine();
          $scope.myForm.$setUntouched();
        };
    });