"Use Strict";

(function () {
    var app = angular.module('app');

    app.config(function ($stateProvider, $urlRouterProvider) {

        //
        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise('/welcome');

        // Set up the states
        $stateProvider
                .state('app', {
                    url: '/welcome',
                    controller: 'WelcomeCntrl as vm',
                    templateUrl: 'views/welcome.html'
                })
                .state('steps', {
                    url: '/steps',
                    templateUrl: 'views/main.html',
                    controller: 'MainCntrl as vm'
                })
                .state('steps.general', {
                    url: '/general',
                    templateUrl: 'views/general.html',
                    controller: 'GeneralCntrl as vm'
                })
                .state('steps.deliveryInformation', {
                    url: '/deliveryInfo',
                    templateUrl: 'views/deliveryInformation.html',
                    controller: 'DeliveryInformationCntrl as vm'
                })
                .state('steps.terms', {
                    url: '/terms',
                    templateUrl: 'views/terms.html',
                    controller: 'TermsCntrl as vm'
                })
                .state('steps.done', {
                    url: '/done',
                    templateUrl: 'views/done.html',
                    controller: 'DoneCntrl'
                });
    });
})();