// modules
var app = angular.module("day4", []);

app.controller("Day4", function ($scope) {
  var desserts = [
    { name: "halwa", likes: "0", dislikes: "0" },
    { name: "gulab jamun", likes: "0", dislikes: "0" },
    { name: "kaju barfi", likes: "0", dislikes: "0" },
    { name: "icecreams", likes: "0", dislikes: "0" },
    { name: "pastries", likes: "0", dislikes: "0" },
  ];
  $scope.desserts = desserts;
  $scope.increaseLikes = function (dessert) {
    dessert.likes++;
  };
  $scope.increaseDisLikes = function (dessert) {
    dessert.dislikes++;
  };
  $scope.name = "Like/Dislike Your favourite dessert";

  $scope.number = 0;
  $scope.num = 0;
  $scope.count = 0;
  $scope.num1 = 0;
  $scope.copyevent = 0;
});
