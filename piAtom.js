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
                template: '<div>Atom: {{atom}}, Tick: {{tick}}, isVisible: {{isVisible}}</div>',
                link: function (scope, element, attrs) {
                                        
                    scope.$watch('tick', function (newTick) {
                        scope.isVisible = newTick % scope.atom === 0 ? !scope.isVisible: scope.isVisible;
                    });
                    
                }
            };

        }]);
    
})();