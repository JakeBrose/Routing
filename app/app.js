let app = angular
.module('famousHighways', ["ngRoute"])
.config($routeProvider => {
            $routeProvider
                .when("/highwayOne", {
                    templateUrl: "partials/highwayOne.html",
                    controller: "highwayOneCtrl"
                })
                .when("/highwayTwo", {
                    templateUrl: "partials/highwayTwo.html",
                    controller: "highwayTwoCtrl"
                })
                .otherwise({ redirectTo: '/'})
});
app.controller('highwayOneCtrl', function ($scope) {
    $scope.highwayName = 'Pacific Coast Highway';
    $scope.highwayDeets = "California's Route 1, or the Pacific Coast Highway, runs from the sunny southern part of the state to the forested greenery of the north, and includes the Big Sur Coast Highway and the San Luis Obispo North Coast Byway.";
});
app.controller('highwayTwoCtrl', function($scope){
    $scope.highwayName = 'Route 66';
    $scope.highwayDeets = 'When construction originally began in 1926, Route 66 was considered a "super-highway" that would offer a new kind of driving freedom.The Depression postponed its completion until 1938, when it became the first road to connect Chicago to Los Angeles via rural communities.'; 
});

// app.controller("navCtrl", function(){

// });