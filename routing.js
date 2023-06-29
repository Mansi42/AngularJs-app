require("angular");
require("angular-route");

var app = angular.module("AppName", ["ngRoute"]);

app.controller("MainController", function ($scope) {
  $scope.a = "air text";
  $scope.b = "air text";
});

app.controller("Main2Controller", function ($scope) {
  $scope.a = "air text";
  $scope.b = "air text";
});

app.config(function ($routeProvider) {
  $routeProvider
    .when("/my", {
      templateUrl: "routing.html",
      controller: "MainController",
    })
    .$routeProvider.when("/first_message", {
      template: "<h2>This is first message</h2>",
    });
});
