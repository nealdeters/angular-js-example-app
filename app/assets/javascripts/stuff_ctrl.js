(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", 
    function($scope){
    
    // $scope.list = "Groceries";
    $scope.tasks = [];

    $scope.addTask = function(newText){
      if (newText){ 
        var newTask = {
          text: newText, 
          completed: false
        };

        $scope.tasks.push(newTask);
        $scope.newText = null;
      }
    };

    $scope.removeTask=function(index){ 
        $scope.tasks.splice(index,1);     
    }

    $scope.toggle = function(task) {
        task.completed = !task.completed;
    };

    $scope.countIncompletedTasks = function(tasks) {
        var tasksIncompleted = [];

        for(var i = 0; i < tasks.length; i++){
            // console.log(tasks[i]);
            if (tasks[i].completed == false){
                tasksIncompleted.push(tasks[i]);
            }
        }
        // console.log(tasksCompleted.length);
        return tasksIncompleted.length;
    };

    $scope.clearCompleted = function(){
        var array = [];

        for(var i = 0; i < $scope.tasks.length; i++){
            if ($scope.tasks[i].completed == false){
                array.push($scope.tasks[i]);
            }
        }  

        $scope.tasks = array;
        $scope.countIncompletedTasks($scope.tasks);

        // for(var index = 0; index < array.length; index++){
        //     $scope.tasks.splice($scope.tasks.indexOf(array[index],1));
        // };
    };

    // $scope.reviews = [
    //   {
    //     text: "Angular is great", 
    //     reviewer: "Jack Johnson",
    //     rating: 5
    //   },
    //   {
    //     text: "test",
    //     reviewer: "Janis Joplin",
    //     rating: 4
    //   },
    //   {
    //     text: "whatever",
    //     reviewer: "John Schultz",
    //     rating: 2
    //   }
    // ];

    // $scope.addReview = function(reviewtext, reviewReviewer, reviewRating){
    //   // if (newReviewText){
    //     var newReview = {
    //       text: reviewtext, 
    //       reviewer: reviewReviewer, 
    //       rating: reviewRating
    //     };

    //     $scope.reviews.push(newReview);
    //     $scope.newReviewText = null;
    //     $scope.newReviewReviewer = null;
    //     $scope.newReviewRating = null;
    //   // }
    // };

    // $scope.removeReview=function(index){ 
    //   $scope.reviews.splice(index,1);     
    // }

    window.scope = $scope;

  });

}());