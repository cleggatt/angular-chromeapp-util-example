'use strict';

angular.module('main', ['cleggatt.chromeapp-util.general', 'cleggatt.chromeapputil.storageServer']).

run(['clcChromeStorageServer', function (storageServer) {
        storageServer.init();
}]);
