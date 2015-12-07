"Use Strict";

(function () {
    var app = angular.module('app');

    app.controller('DoneCntrl', ['$scope', function ($scope) {
        var vm = this;
        $scope.setStep(3);
    }]);

}(angular || {}));