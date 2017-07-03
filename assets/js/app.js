(function(){
	angular.module('fileManager',['ngRoute', 'ngMaterial', 'ngMdIcons', 'ng-fx', 'ngAnimate','ngFileUpload'])
	.config(['$routeProvider', '$mdThemingProvider', function($routeProvider, $mdThemingProvider) {
			$routeProvider.when('/', {
				templateUrl: 'assets/views/upload.html',
				controller: 'uploadCtrl'
			})
			.when('/all', {
				templateUrl: 'assets/views/allFiles.html',
				controller: 'allFilesCtrl'
			})
			.otherwise({
        		redirectTo: '/'
      		});
			$mdThemingProvider.theme('default')
				.primaryPalette('blue-grey')
				.accentPalette('amber');
		}]);
})();