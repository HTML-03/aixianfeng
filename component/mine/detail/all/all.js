angular.module('AllModule',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/all',{
		templateUrl:'component/mine/detail/all/all.html',
		controller:'AllCtrl',
		css:'component/mine/detail/all/all.css'
	})
}])