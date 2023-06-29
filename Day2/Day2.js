var app = angular.module("day2", []);

app.controller("Day2", function ($scope) {
  $scope.date = new Date();

  $scope.amount = "280000";
  $scope.fruits = ["apple", "orange", "mango", "grapes"];
  $scope.employee = [
    { id: 23, name: "mansi", gender: "female" },
    { id: 22, name: "nargis", gender: "female" },
    { id: 24, name: "shruti", gender: "female" },
    { id: 25, name: "ritika", gender: "female" },
    { id: 22, name: "anshu", gender: "female" },
    { id: 23, name: "shiffali", gender: "female" },
  ];
  $scope.class = [
    { name: "mansi", age: 34, city: "garhdiwala" },
    { name: "shruti", age: 14, city: "garhdiwala" },
    { name: "shiffali", age: 44, city: "garhdiwala" },
    { name: "anshu", age: 74, city: "tanda" },
  ];
});

app.controller("ctrl1", function ($scope) {
  $scope.color = "blue";
});

app.controller("ctrl2", function ($scope) {
  $scope.color1 = "red";
});

app.run(function ($rootScope) {
  $rootScope.myname = "Root Name";
});
