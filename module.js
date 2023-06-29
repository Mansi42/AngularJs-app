var app = angular.module("myModule", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      template: "<h2>home page</h2>",
    })
    .when("/about", {
      templateUrl: "index.html",
      controller: "myController",
    })
    .when("/contact", {
      template: "<h2>contact page</h2>",
    })
    .otherwise({
      template: "<h2>nothing functions</h2>",
    });
});
app.controller(
  "myController",
  function ($scope, $location, $interval, $timeout, $window, $http) {
    $http.get("http://localhost:3000/people.json").then(function (response) {
      console.log(response.data);
      $scope.persons = response.data.records;
      //$scope.myhttp = response.data;
    });

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
    $scope.country = ["India", "Canada", "Australia", "America"];
    $scope.selectedCountry = $scope.country[1];
    $scope.fruits = ["apple", "orange", "mango", "grapes"];
    $scope.employee = { id: 23, name: "mansi", gender: "female" };
    $scope.class = [
      { name: "mansi", age: 34, city: "garhdiwala" },
      { name: "shruti", age: 14, city: "garhdiwala" },
      { name: "shiffali", age: 44, city: "garhdiwala" },
      { name: "anshu", age: 74, city: "tanda" },
    ];
    $scope.date = new Date();
    $scope.url = $location.absUrl();

    $scope.count = 0;
    $interval(function () {
      $scope.count++;
    }, 1000);

    $interval(function () {
      $scope.dateAndTime = new Date();
    }, 1000);

    $timeout(function () {
      $scope.name = "iosehyfnbgyarefuw";
    }, 6000);

    $scope.DisplayAlert = function (msg) {
      $window.alert("Your name is " + msg);
    };

    $scope.DisplayPrompt = function () {
      let fname = $window.prompt("your first name is:");
      let lname = $window.prompt("your last name is:");
      $window.alert("Your name is " + fname + " " + lname);
    };
  }
);

app.controller("ctrl1", function ($scope, $http) {
  $scope.color = "red";
  $scope.name = null;
  $scope.age = null;
  $scope.city = null;
  $scope.postdata = function (name, age, city) {
    var data = {
      name: name,
      age: age,
      city: city,
    };

    $http
      .post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(data))
      .then(
        function (response) {
          console.log(response);
          if (response.data) {
            console.log("hi");

            $scope.msg = "data submitted";
            $scope.Id = response.data.id;
            $scope.Name = response.data.name;
            $scope.Age = response.data.age;
            $scope.City = response.data.city;
          }
        },
        function (error) {
          console.log(error);
        }
      );
  };
});
app.controller("ctrl2", function ($scope) {
  $scope.color1 = "blue";
});
