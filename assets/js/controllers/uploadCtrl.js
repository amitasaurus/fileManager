(function(){
	angular.module('fileManager')
		   .controller('uploadCtrl',['$scope','Upload','$mdToast',function($scope, Upload,$mdToast) {
		   	var showToast = function(message){
		   		$mdToast.show(
			      $mdToast.simple()
			        .textContent(message)
			        .position('bottom right')
			        .hideDelay(3000)
    				);
		   	}
  			
		   	$scope.uploader = function(){
		   		$scope.uploadFiles = function(files) {
				Upload.upload({
					url: 'upload/url', //add post method here
					data: {
						file: files
						}
				}).then(function(resp) {
					var msg = 'Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data;
					showToast(msg);
				}, function(resp) {
					var errMsg = 'Error status: ' + resp.status;
					showToast(errMsg);

				}, function(evt) {
					$scope.determinateValue = parseInt(100.0 * evt.loaded / evt.total);
					console.log('progress: ' + $scope.determinateValue + '% ' + evt.config.data.file.name);
				});
			};
		   	}
		   }]);
})();