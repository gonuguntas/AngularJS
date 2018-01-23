(function(){
    
    function loginCtrlfn($scope,$state){
        $scope.fname="Login controller";
        
        $scope.goHome=function(){
            
            $state.go("home",{data:"Home success"});   //  $state.go()  used to navigate one page to another page
                                                         //  $state.reload()  used to reload

        };
    }
    
    angular.module("login")
    .controller("loginCtrl",["$scope","$state",loginCtrlfn]);
})();