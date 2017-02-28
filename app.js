var app = angular.module('aixianfeng', ['ngRoute', 'angularCSS','HomeModule','SupermarketModule','ShopModule','MineModule'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.otherwise({
				redirectTo: '/home'
			})
	}])
document.documentElement.style.fontSize = innerWidth / 32 + 'px';
window.onresize = function() {
	document.documentElement.style.fontSize = innerWidth / 32 + 'px';
}
console.log(document.documentElement.style.fontSize);