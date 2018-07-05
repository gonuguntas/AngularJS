var testAngularApp = angular.module("unitTestAngular",[]);

testAngularApp.controller("appCtrl",function($rootScope,$scope){
    $scope.title = "Testing AngularJs Application";
    
    $scope.destinations = [];
    
    $scope.newDestination = {
        city:undefined,
        country:undefined
    };
    
    $scope.addDestination = function(){
        $scope.destinations.push(
            {
                city:$scope.newDestination.city,
                country:$scope.newDestination.country
            }
        );
    }
    
});

// To create karma.conf.js     karma init
//  To start karma use  following command 
//  karma start karma.conf.js
// install phantomjs globally
// npm install    bower install in respected folders
