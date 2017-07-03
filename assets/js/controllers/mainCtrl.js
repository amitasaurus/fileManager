(function(){
	angular.module('fileManager')
		   .controller('mainCtrl',['$scope', '$mdSidenav','$location',function($scope, $mdSidenav, $location) {
		   	
		   	$scope.toggleSidenav = function() {
				$mdSidenav('left').toggle();
			}

			$scope.goTo = function(url){
				$location.path(url);
				$mdSidenav('left').close();
			}
		   }]);
})();