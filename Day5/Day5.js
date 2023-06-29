var app = angular.module("day5", ["ngAnimate"]);

app.controller("Day5", function ($scope) {
  $scope.my = "asydguy";
  $scope.class = [
    { name: "mansi", age: 34, city: "garhdiwala" },
    { name: "shruti", age: 14, city: "garhdiwala" },
    { name: "shiffali", age: 44, city: "garhdiwala" },
    { name: "anshu", age: 74, city: "tanda" },
  ];
});
