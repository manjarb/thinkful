angular.module('madLibs', [])
    .constant('VERSION', 1.1)
    .controller('MyCtrl', function(VERSION, $scope) {
        $scope.female_name = 'female_name';
        $scope.job_title='job_title';
        $scope.tedious_task='tedious_task';
        $scope.dirty_task='dirty_task';
        $scope.female_name2='female_name2';
        $scope.celebrity='celebrity';
        $scope.useless_skill='useless_skill';
        $scope.adjective='adjective';
        $scope.obnoxiuous_celbertity='obnoxiuous_celbertity';
        $scope.dirty_task='dirty_task'
    });