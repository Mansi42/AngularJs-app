var c_app = angular.module("myApp1", []);
const url = "https://api.covidtracking.com/v1/us/daily.json";
// c_app.run(function ($rootScope, $location, $http) {
//   console.clear();
//   console.log("running");
// });

// c_app.config(function ($routeProvider) {
//   $routeProvider
//     .when("/login", {
//       templateUrl: "login.html",
//       controller: "loginCtrl",
//     })
//     .when("/Reg", {
//       templateUrl: "Reg.html",
//       controller: "regCtrl",
//     })
//     .when("/home", {
//       templateUrl: "Covid_mgmt/covidMgmt.html",
//       controller: "c_ctrl",
//     })
//     .when("/about", {
//       templateUrl: "Covid_mgmt/about.html",
//       controller: "aboutCtrl",
//     })
//     .when("/details", {
//       templateUrl: "Covid_mgmt/details.html",
//       controller: "detailCtrl",
//     })
//     .when("/users", {
//       templateUrl: "Covid_mgmt/vAppoint.html",
//       controller: "userCtrl",
//     })
//     .otherwise({
//       redirectTo: "login.html",
//     });
// });
c_app.controller("c_ctrl", function ($scope, $http) {
  $scope.title = "Stay Home Stay Safe!"; //alert("test1"); // $scope.postData = function ( //   name, //   email, //   password, //   gender, //   dob, //   address, //   phoneNumber // ) { //alert("testyui"); // var data = { //   name: name, //   email: email, //   password: password, //   gender: gender, //   dob: dob, //   address: address, //   phoneNumber: phoneNumber, // }; //   $http.post(" http://localhost:3004/regusers", JSON.stringify(data)).then( //     function (response) { //       console.log(response); //       if (response.data) { //         console.log("hi"); //         // console.log(response.data.name); //         $scope.Name = response.data.name; //         $scope.Email = response.data.email; //         $scope.Password = response.data.password; //         $scope.Gender = response.data.gender; //         $scope.Dob = response.data.dob; //         $scope.Address = response.data.address; //         $scope.PhoneNumber = response.data.phoneNumber; //       } //     }, //     function (error) { //       console.log(error); //     } //   ); // };
});

c_app.controller("regCtrl", function ($scope, $http, $location, $rootScope) {
  $scope.name = "widoj";
  $scope.title = "Stay Home Stay Safe!"; //alert("test1");
  $scope.name = null;
  $scope.email = null;
  $scope.password = null;
  $scope.gender = null;
  $scope.dob = null;
  $scope.dod = null;
  $scope.address = null;
  $scope.phoneNumber = null;

  $scope.postData = function (
    name,
    email,
    password,
    gender,
    dob,
    address,
    phoneNumber
  ) {
    //alert("testyui");
    var data = {
      name: name,
      email: email,
      password: password,
      gender: gender,
      dob: dob,
      address: address,
      phoneNumber: phoneNumber,
    };

    $http.post(" http://localhost:3004/regusers", JSON.stringify(data)).then(
      function (response) {
        console.log(response);
        if (response.data) {
          console.log("hi"); // console.log(response.data.name);
          $scope.Name = response.data.name;
          $scope.Email = response.data.email;
          $scope.Password = response.data.password;
          $scope.Gender = response.data.gender;
          $scope.Dob = response.data.dob;
          $scope.Address = response.data.address;
          $scope.PhoneNumber = response.data.phoneNumber;
        }
        $location.path("/home");
      },
      function (error) {
        console.log(error);
      }
    );
  };

  $scope.goToLogin = function () {
    $location.path("/login");
  };
});

c_app.controller("loginCtrl", function ($http, $scope, $location, $rootScope) {
  $scope.login = function (email, password) {
    alert("sdjamijudn");

    $http.get("http://localhost:3004/regusers").then(function (response) {
      console.log(response.data);
      const users = response.data;
      console.log(users);
      users.map((item) => {
        console.log(item.email);
        console.log(email);
        if (item.email == email) {
          console.log("usydgy");
          if (item.password == password) {
            alert("login success"); // $location.path("/home");
          }
        }
      });
    });
  };

  $scope.goToRegister = function () {
    alert("hi");
    $location.path("/Reg");
  };
});

c_app.controller("detailCtrl", function ($scope, $http) {
  $http.get(url).then(
    (response) => {
      console.log("success");
      console.log(response);
      $scope.all_data = response.data;
    },
    (error) => {
      console.log("error");
      console.log(error);
    }
  );
});

c_app.controller("userCtrl", function ($scope, $http) {
  $scope.id = null;
  $scope.name = null;
  $scope.email = null;
  $scope.password = null;
  $scope.gender = null;
  $scope.dob = null;
  $scope.dod = null;
  $scope.address = null;
  $scope.phoneNumber = null;
  $scope.vaccineName = null;
  $scope.vstatus = null;

  $scope.ausers = null;
  $scope.showUsers = function (
    id,
    name,
    email,
    password,
    gender,
    dob,
    address,
    phoneNumber,
    vaccineName,
    vstatus
  ) {
    // alert("adjamdaijudn");
    $http.get("http://localhost:3002/appointUsers").then(function (response) {
      console.log(response.data);
      const ausers = response.data;
      console.log(ausers);

      $scope.appointusers = response.data;
    });
  };

  $scope.saveData = function (
    id,
    name,
    email,
    password,
    gender,
    dod,
    address,
    phoneNumber,
    vaccineName,
    vstatus
  ) {
    //alert("testyui");
    var data = {
      id: id,
      name: name,
      email: email,
      password: password,
      gender: gender,
      dod: dod,
      address: address,
      phoneNumber: phoneNumber,
      vaccineName: vaccineName,
      vstatus: vstatus,
    };

    $http
      .post(" http://localhost:3002/appointUsers", JSON.stringify(data))
      .then(
        function (response) {
          console.log(response);
          if (response.data) {
            console.log("hi"); // console.log(response.data.name);
            $scope.Id = response.data.id;
            $scope.Name = response.data.name;
            $scope.Email = response.data.email;
            $scope.Password = response.data.password;
            $scope.Gender = response.data.gender;
            $scope.Dod = response.data.dod;
            $scope.Address = response.data.address;
            $scope.PhoneNumber = response.data.phoneNumber;
            $scope.VaccineName = response.data.vaccineName;
            $scope.Vstatus = response.data.vstatus;
          }
        },
        function (error) {
          console.log(error);
        }
      );
  };

  $scope.Deletebtn = function (id) {
    // alert("hydug");
    console.log(id);
    $http.delete("http://localhost:3002/appointUsers/" + id).then(
      function (response) {
        console.log("data deleted");
      },
      function (error) {
        console.log(error.message);
      }
    );
    $scope.showUsers();
  };

  $scope.Editbtn = function (data) {
    console.log(data.id);
    const getId = data.id;
    $http.get("http://localhost:3002/appointUsers/" + id).then(
      function (response) {
        // $scope.formdata = response.data;
        // console.log($scope.formdata);
        console.log(response);

        $http.put("http://localhost:3002/appointUsers/", $scope.data).then(
          function (response) {
            console.log(response);
            console.log("data updated");
          },
          function (error) {
            console.log(error);
          }
        );
      },
      function (error) {
        console.log(error);
      }
    );
  };
});

c_app.controller("aboutCtrl", function ($scope, $http) {
  var diseases = [
    { name: "fever", positive: "0", negative: "0" },
    { name: "shortness of breathe", positive: "0", negative: "0" },
    { name: "loss of taste or smell", positive: "0", negative: "0" },
    { name: "cough and cold", positive: "0", negative: "0" },
    { name: "shivering", positive: "0", negative: "0" },
  ];
  $scope.diseases = diseases;

  $scope.increasePositives = function (disease) {
    disease.positive++;
  };
  $scope.increaseNegatives = function (disease) {
    disease.negative++;
  };
  $scope.exportToPdf = function () {
    console.log("duysuhduhn");
    var doc = new jsPDF();
    var htmlTable = document.getElementById("myTable");
    doc.html(htmlTable, {
      callback: function () {
        doc.save("table.pdf");
      },
    });
  };
});
