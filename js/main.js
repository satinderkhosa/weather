var app = angular.module("app", []); 

app.controller("myCtrl", function($scope, $http) {
    $scope.items = [];

    $scope.weather ='';
    
    $scope.city='Toronto, CA';

    $scope.weekdays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    $scope.getDay = function(index){
        var date = new Date();
        date.setDate(date.getDate()+index);
        return $scope.weekdays[date.getDay()] +", " + date.getDate()  ;
    }
    
    
    
    $scope.getWeather = function(){
  
        
       $http({
          method: 'GET',
           
           //url: "http://api.openweathermap.org/data/2.5/forecast?q="+$scope.city+"&cnt=7&appid=fa18504d7afcf756d05f89ba2f5afc50"
           url: "http://api.openweathermap.org/data/2.5/forecast/daily?q="+$scope.city+"&cnt=7&appid=fa18504d7afcf756d05f89ba2f5afc50"
           
        }).then(function successCallback(response) {
            $scope.weather = response.data;
           
          }, function errorCallback(response) {
                $scope.weather = response;
          });
     
    }
    
    
    
 
    
    $scope.getWeather();
    
    
});




