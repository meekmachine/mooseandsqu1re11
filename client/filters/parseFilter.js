angular.module('app').filter('parseFilter', parseFilter);

parseFilter.$inject = [];

function parseFilter() {
    return function(x) {
        let y = angular.copy(x);
        delete y.object;
        return y;
    }
}