"Use Strict";

(function () {
    var app = angular.module('app');

    app.controller('DeliveryInformationCntrl', ['$scope', function ($scope) {
        var vm = this;
        $scope.setStep(1);
    }]);

}(angular || {}));