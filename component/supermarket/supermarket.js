angular.module('SupermarketModule',['ngRoute','me-lazyload','productModule'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/supermarket',{
		templateUrl:'component/supermarket/supermarket.html',
		controller:'SupermarketCtrl',
		css:'component/supermarket/supermarket.css'
	})
}])
.service('supermarketData',['$http',function($http){
	this.get=function(){
		return $http.get("data/two.json");
	};
}])
.controller('SupermarketCtrl',['$scope','supermarketData',function($scope,supermarketData){
	supermarketData.get().success(function(data){
		var res=$scope.arrSpImg=data.data.categories;
//		console.log(res);
		$scope.arrProducts = data.data.products[res[0].id];
//		console.log($scope.arrProducts);
		$scope.cclick = function(i){
			var id = res[i].id;
			$scope.arrProducts = data.data.products[id];
//			console.log(data.data.products[id]);
			$scope.arrProducts = data.data.products[id];
			lis[0].style.borderLeft = "0px solid";
			lis[i].style.borderLeft = "4px solid orange";
			for (var k = 0 ; k < lis.length ; k ++) {
				lis[k].onmousedown = function () {
					if (i!=k) {
						lis[i].style.borderLeft = "0px solid";
//						lis[k].style.borderLeft = "4px solid orange";
					}
				}
			}
		}
		var num1 = 0;
		var num2 = 0;
		document.getElementById("allThings").onclick = function() {
			num1++;
			document.getElementById("cover").onclick = function() {
				this.style.display = "none";
				document.getElementById("cRlist").style.display = "block";
				num1++;
			};
			document.getElementById("cover1").style.display = "none"; 
			if (num1%2!=0) {
				document.getElementById("cover").style.display = "block"; 
				document.getElementById("cRlist").style.display = "none"
			}else{
				document.getElementById("cRlist").style.display = "block"
				document.getElementById("cover").style.display = "none";
			}
		}
		document.getElementById("sT").onclick = function() {
			num2++;
			document.getElementById("cover1").onclick = function() {
				this.style.display = "none";
				document.getElementById("cRlist").style.display = "block";
				num2++;
			};
			document.getElementById("cover").style.display = "none";
			if (num2%2!=0) {
				document.getElementById("cRlist").style.display = "none"
				document.getElementById("cover1").style.display = "block";
			}else{
				document.getElementById("cover1").style.display = "none"; 
				document.getElementById("cRlist").style.display = "block"
			}
		}
		
		var buts = document.querySelectorAll(".cover1>div>button");
		for (var j = 0 ;j < buts.length ; j ++) {
			(function(j){
				buts[0].style.border = "1px solid orange";
				buts[0].style.background = "lemonchiffon";
				buts[j].onclick = function () {
					var myC = this;
					buts[0].style.border = "1px solid lightgray";
					buts[0].style.background = "white";
					buts[1].style.border = "1px solid lightgray";
					buts[1].style.background = "white";
					buts[2].style.border = "1px solid lightgray";
					buts[2].style.background = "white";
					buts[3].style.border = "1px solid lightgray";
					buts[3].style.background = "white";
					this.style.border = "1px solid orange";
					this.style.background = "lemonchiffon";
					
				}
			})(j)
		}
	})
	$scope.products = function (j) {
		var arrProduct = [];
		var productImg = document.querySelectorAll("#cRlist>div:nth-of-type("+(j+1)+")>a>div>img");
		var productName = document.querySelectorAll("#cRlist>div:nth-of-type("+(j+1)+")>a>div>ul>li:first-child");
		var productWeight = document.querySelectorAll("#cRlist>div:nth-of-type("+(j+1)+")>a>div>ul>li:nth-of-type(3)");
		var productPrice = document.querySelectorAll("#cRlist>div:nth-of-type("+(j+1)+")>a>div>ul>li:nth-of-type(4)");
//		console.log(productPrice[0].innerText)
		var product = {img:productImg[0].src,name:productName[0].innerText,weight:productWeight[0].innerText,price:productPrice[0].innerText}
		arrProduct.push(product);
//		console.log(arrProduct)
		localStorage.setItem("product1",JSON.stringify(arrProduct));
//		console.log(JSON.parse(localStorage.getItem("product1")))
	}
}])
