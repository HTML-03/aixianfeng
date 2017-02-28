angular.module('HomeModule',['ngRoute','me-lazyload'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'component/home/home.html',
		controller:'HomeCtrl',
		css:'component/home/home.css'
	})
}])

.service('homeData',['$http',function($http){
	this.get=function(){
		return $http.get('data/home.json');
	}
	this.swiper=function(){
		new Swiper('.swiper-container',{
			pagination: '.swiper-pagination',
			paginationClickable: true,
			loop: true,
			autoplayDisableOnInteraction:false,
			autoplay: 1000
		})
	}
}])

.controller('HomeCtrl',['$scope','homeData',function($scope,homeData){
	homeData.get().success(function(res){
//		console.log(res.data.act_info);
		$scope.arr=res.data.act_info;
//		console.log($scope.arr);
	})
	homeData.swiper();
}])

