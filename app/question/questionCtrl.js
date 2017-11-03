angular.module('triviaTrends').controller('questionCtrl', function($scope, mainSrvc){
    // mainSrvc.get10().then(response => {
    //     $scope.questions = response.data;
    // })

    $scope.getTen = function(){
        mainSrvc.getTen().then(response => {
            $scope.questions = response.data;
        })
    }

    $scope.getDifficulty = function(difficulty){
        mainSrvc.getDifficulty(difficulty).then(response => {
            $scope.questions = response
        })
    }

    $scope.correctAnswer = function(id, chosenAnswer){
        var question;
        for(var i = 0; i < $scope.questions.length; i++){
            if($scope.questions[i]._id == id){
                question = $scope.questions[i];
                break;
            }
        }
        question.chosenAnswer = chosenAnswer;
    }

    $scope.findAnimal = function(){
        $scope.flag = !$scope.flag
    }

})