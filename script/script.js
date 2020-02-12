var myApp = angular.module("myModule",[]);
 //create controller

 //Register the controller with module;
 myApp.controller("myController",function($scope){
	 $scope.message="AngularJS tutorial";
	 employee={
		 name:"manisha",
		 age:"31",
		Gender:"Female"
	 };
	 
	 country={
		name:"india",
		flag:"image/IMG_7126.jpg"
	 }
	
$scope.employee = employee;	
$scope.country=country;
 });
 
 
 myApp.controller("myController1",function($scope){
	var employees=[
	{firstName:"manisha",dateofbirth:new Date("March 31,1988"),LastName:"Naik",Gender:"Female",Salary:"86000.004"},
	{firstName:"Swapnil",dateofbirth:new Date("May 10,1986"),LastName:"Patil",Gender:"Male",Salary:"120000.882"},
	{firstName:"Manasvi",dateofbirth:new Date("May 11,2017"),LastName:"Patil",Gender:"Female",Salary:"6000"},
	{firstName:"Srushti",dateofbirth:new Date("April 16,2011"),LastName:"Chapi",Gender:"Female",Salary:"8000"},
	{firstName:"Balasaheb",dateofbirth:new Date("December 11,1991"),LastName:"Patil",Gender:"Male",Salary:"36000.11"}
	];
	$scope.employees=employees;
	$scope.rowLimit = 3;
	$scope.sortColumn = "firstName";
	/*var countries = [
	{	countryName:"UK",
		Cities:[{Name:"London"},{Name:"Birmingham"},{Name:"Manchester"}]
	},
	{	countryName:"USA",
		Cities:[{Name:"London1"},{Name:"Birmingham1"},{Name:"Manchester1"}]
	},
	{	countryName:"india",
		Cities:[{Name:"Mumbai"},{Name:"Delhi"},{Name:"Pune"}]
	}
 ];*/
 
 //$scope.countries = countries;
 
  /*var technologies= [
  {name:"C",likes:"0",disLikes:"0"},
  {name:"ASP",likes:"0",disLikes:"0"},
  {name:"C#",likes:"0",disLikes:"0"},
  {name:"Java",likes:"0",disLikes:"0"}
 ];
 $scope.technologies=technologies;
	 $scope.increamentLikes = function(technology){
		technology.likes++;
	 };
	 
	 $scope.increamentDislikes = function(technology){
		technology.disLikes++;
	 };*/
 });