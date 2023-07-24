(function () {
    'use-strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];


    function LunchCheckController($scope) {
        $scope.lunchList = "";
        $scope.message = "";
        $scope.helpMesssge = "";

        function setAlertStyle(color) {
            $scope.inputStyle = {
                'border-color': color
            };
            $scope.mesageStyle = {
                'color': color
            }
        }

        $scope.checkIfTooMuch = function () {
            var lunchList = $scope.lunchList;
            if (lunchList.length > 0) {
                var count = 0;
                var lunchArr = lunchList.split(',');
                var launchSize = lunchArr.length;

                for (var i = 0; i < launchSize; i++) {
                    if (lunchArr[i].trim().length > 0) {
                        count++;
                    }

                }
                setAlertStyle('#398439');
                $scope.message = count > 3 ? "Too much!" : "Enjoy!";
                $scope.helpMessage = count < launchSize ? "I don't consider empty item!" : "";
            }
            else {
                setAlertStyle('#B5555A');
                $scope.message = "Please Enter Data First!";
            }
        }
    }
})();