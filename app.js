(function () {
    'use strict';

    angular
        .module('piClock', [])
        .controller('mainController', ['$scope', function ($scope) {
            
            var vm = this;
            
            vm.text = 'Helge';

        }]);
    
})();