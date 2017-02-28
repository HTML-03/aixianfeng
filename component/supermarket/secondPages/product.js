angular.module('productModule',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/products',{
		templateUrl:'component/supermarket/secondPages/product.html',
		controller:'ProductCtrl',
		css:'component/supermarket/secondPages/product.css'
	})
}])
.controller("ProductCtrl",["$scope",function($scope){
	var product = JSON.parse(localStorage.getItem("product1"));
	console.log(product[0].name);
	$scope.arrProduct = product;
}])
