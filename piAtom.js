(function () {
    'use strict';

    angular
        .module('piClock')
        .directive('piAtom', [function () {
            
            return {
                restrict: 'E',
                scope: {
                    atom: '=?',
                    tick: '=?'
                },
                template: '<div class="piAtomWrapper"><div ng-class="{one:atom==1,two:atom==2,three:atom==3,four:atom==4,five:atom==5,six:atom==6,seven:atom==7,eight:atom==8,nine:atom==9}" class="piAtom" ng-show="isVisible"></div></div>',
                link: function (scope, element, attrs) {
                    
                    scope.$watch('tick', function (newTick) {
                        scope.isVisible = newTick % scope.atom === 0 ? !scope.isVisible: scope.isVisible;
                    });
                    
                }
            };

        }]);
    
})();