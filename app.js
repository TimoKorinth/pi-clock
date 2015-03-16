(function () {
    'use strict';

    angular
        .module('piClock', [])
        .controller('mainController', ['$scope', '$interval', function ($scope, $interval) {
            
            var vm = this;
            
            var pi = '314159';
            var piArray = ('' + pi).split('');
            
            vm.piArray = piArray;
            
            function updateTime(tick) {
                vm.tick = tick;
            }
            
            var time = $interval(updateTime, 1000);

        }]);
    
})();