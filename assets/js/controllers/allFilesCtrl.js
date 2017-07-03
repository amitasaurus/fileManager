(function(){
	angular.module('fileManager')
		   .controller('allFilesCtrl',['$scope', '$mdDialog', 'dataService', 'dialogService', function($scope, $mdDialog, dataService, dialogService) {
		   	
		   	dataService.getFiles()
				.then(onSuccess)

			function onSuccess(data) {
				$scope.items = data;
			}
			$scope.openDocument = function(ev, item) {
				dialogService.currentlyReading = item;
				$mdDialog.show({
					controller: function($scope, $mdDialog, dataService, dialogService) {
						$scope.cancel = function() {
							$mdDialog.cancel();
						};
						$scope.current = dialogService.currentlyReading;
						$scope.url = 'https://drive.google.com/file/d/' + $scope.current.location + '/preview';
					},
					templateUrl: 'assets/views/dialog.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: true
				});
			}
		}])
		.filter('trustAsResourceUrl', ['$sce', function($sce) {
			return function(val) {
				return $sce.trustAsResourceUrl(val);
			};

		   }]);
})();