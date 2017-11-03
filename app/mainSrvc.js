angular.module('triviaTrends').service('mainSrvc', function($http){
    this.getTen = function(){
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions')
            .then(response => {
                console.log('ten', response)
                return response
            })
    }

    this.getDifficulty = function(difficulty){
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/difficulty/' + difficulty)
            .then(response => {
                console.log('diff', response)
                return response.data
            })
    }

  
})