var app = angular.module("day3", []);

app.controller(
  "Day3",
  function ($scope, $location, $timeout, $window, $interval, $http) {
    $scope.date = new Date();
    $scope.url = $location.protocol();
    $scope.url1 = $location.absUrl();

    $scope.count = 0;
    $interval(function () {
      $scope.count++;
    }, 1000);

    $interval(function () {
      $scope.dateAndTime = new Date();
    }, 1000);

    $scope.myName = "Mansi Dhingra";
    $timeout(function () {
      $scope.myName = "The name is changed to Mansi ";
    }, 6000);

    $scope.DisplayAlert = function (msg) {
      $window.alert("Your name is " + msg);
    };

    $scope.DisplayPrompt = function () {
      let fname = $window.prompt("your first name is:");
      let lname = $window.prompt("your last name is:");
      $window.alert("Your name is " + fname + " " + lname);
    };

    // HTTP Service---------------------------------------------------------->

    $http
      .get("file:///D:/AngularJs/Day3/people.json")
      .then(function (response) {
        console.log(response.data);
        $scope.persons = response.data.records;
      });

    $scope.student = {
      name: "Mansi",
      age: "56",
      city: "hoshiarpur",
    };

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
        .post(
          "https://jsonplaceholder.typicode.com/posts",
          JSON.stringify(data)
        )
        .then(
          function (response) {
            console.log(response);
            if (response.data) {
              console.log("hi");

              $scope.msg = "data submitted";
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

    $scope.country = ["India", "Canada", "Australia", "America"];
    $scope.selectedCountry = $scope.country[1];
  }
);
