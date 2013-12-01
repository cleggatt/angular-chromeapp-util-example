'use strict';

angular.module('sandbox', ['cleggatt.chromeapputil.storageClient']).

controller('SandboxCtrl', ['$scope', 'clcStorage', function ($scope, storage) {

    $scope.get = function() {
        if ($scope.keyToGet) {

            var keyGot = $scope.keyToGet;
            storage.getItem($scope.keyToGet, function(data) {
                $scope.keyGot = keyGot;
                $scope.valueGot = data || 'not stored';
            });
        }

        $scope.keyToGet = '';
    };

    $scope.add = function() {
        if ($scope.keyToAdd && $scope.valueToAdd) {
            storage.setItem($scope.keyToAdd, $scope.valueToAdd);
        }

        $scope.keyToAdd = '';
        $scope.valueToAdd = '';
    };

    $scope.remove = function() {
        if ($scope.keyToRemove) {
            storage.removeItem($scope.keyToRemove);
        }

        $scope.keyToRemove = '';
    };
}]);