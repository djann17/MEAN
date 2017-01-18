function primCtrl($scope){
	$scope.listCli=[{nombre:'Fran', ciudad:'LineaLaConchi'},{nombre:'Sergio', ciudad:'Parla'},{nombre:'Arnulfo', ciudad:'Leganes'}];
	
}

var modulo = angular.module("miap", []);

modulo.controller("primCtrl", primCtrl);