/**
 * Created by tugceakin on 4/8/16.
 */

bouncerApp.controller('RequestsGraphController', function($scope, $interval) {
    console.log('in req graph controller');
    $scope.pageClass = 'page-benchmarking';

    $scope.graphOff = true;
    $scope.benchmarkCompleted = false;

    $scope.resetGraph = function() {
        $scope.labels =['', '', '', '', '', ''];
        $scope.data = [
            [0,0,0,0,0,0]
        ];
    };

    $scope.resetGraph();


    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };

    var timeCounter = 0;
    $scope.startGraph = function(){
        $scope.benchmarkCompleted = false;
        $scope.graphOff = false;
        // Simulate async data update
        $scope.resetGraph();
        $scope.Benchmarking = $interval(function () {
            timeCounter += 3;
            // Remove first element
            $scope.labels.splice(0,1);
            $scope.data[0].splice(0,1);

            $scope.data[0].push(Math.random() * 1000); //For now get random data and push it
            $scope.labels.push(timeCounter);


            if(timeCounter >= 21) {
                $scope.stopBenchmarking();
            }

        }, 500);

        $scope.stopBenchmarking = function() {
            if (angular.isDefined($scope.Benchmarking)) {
                $interval.cancel($scope.Benchmarking);
                $scope.Benchmarking = undefined;
                timeCounter = 0;
                $scope.graphOff = true;
                $scope.benchmarkCompleted = true;
            }
        };
    }




});
