angular.module('ShopModule',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/shop',{
		templateUrl:'component/shop/shop.html',
		controller:'ShopCtrl',
		css:'component/shop/shop.css'
	})
}])