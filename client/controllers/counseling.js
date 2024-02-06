angular.module('app').controller('counselingController', counselingController);

counselingController.$inject = ['$scope', '$window','$uibModal', '$state', 'characterService'];

function counselingController($scope, $window, $uibModal, $state, characterService) {
    $scope.counselors = characterService.counselors;
    $scope.selectedCounselor = $scope.counselors[0];
    $scope.previewImgSrc = $scope.selectedCounselor.img;

    $scope.setCounselor = function (index) {
        characterService.setUsersCounselor(index);
        $scope.selectedCounselor = characterService.getUsersCounselor();
        // characterService.changeName($scope.selectedCounselor.name);

        $scope.nextHref = $scope.selectedCounselor.url;
        $scope.previewImgSrc = $scope.selectedCounselor.img;
    };
}