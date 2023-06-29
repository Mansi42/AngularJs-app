// modules
var app = angular.module("day1", []);

app.controller("Day1", function ($scope) {
  $scope.myName = "Mansi Dhingra";
  $scope.name2 = "Mansi Dhingra";
  $scope.student = {
    name: "Mansi",
    age: "56",
    city: "hoshiarpur",
  };
  $scope.number = 0;
  $scope.add = function () {
    $scope.number++;
  };

  $scope.fruits = ["apple", "orange", "mango", "grapes"];

  $scope.class = [
    { name: "mansi", age: 34, city: "garhdiwala" },
    { name: "shruti", age: 14, city: "garhdiwala" },
    { name: "shiffali", age: 44, city: "garhdiwala" },
    { name: "anshu", age: 74, city: "tanda" },
  ];
});
