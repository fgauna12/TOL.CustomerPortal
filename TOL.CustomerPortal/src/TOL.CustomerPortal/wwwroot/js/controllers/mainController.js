angular
  .module('app').controller('MainCntrl', ['$scope', '$state',
  function ($scope, $state) {
      var vm = this;

      vm.currentStep = 0;
      vm.isDone = false;

      vm.nextStep = function() {
          if (vm.currentStep === 0) {
              $state.go('steps.deliveryInformation');
          }
          if (vm.currentStep === 1) {
              $state.go('steps.terms');
          }
          if (vm.currentStep === 2) {
              $state.go('steps.done');
          }

      }

      vm.isDone = function() {
          return vm.currentStep === 3;
      }

      $scope.setStep = function(stepNumber) {
          vm.currentStep = stepNumber;
      }

  }]);