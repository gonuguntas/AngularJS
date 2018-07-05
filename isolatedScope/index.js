(function(){
    
    
    var app=angular.module("myapp",[]);
    
    app.controller("myctrl",function($scope){
        $scope.fname="Nageswar rao";
        
        $scope.doShow=function(){alert("& is success");};
         
    });
    
    // inherited scope
    app.directive("iso",function(){
        return {
            template:"<h2>First name is :{{fname}}</h2>"
        };
    });
    
    //  isolted scope with scope:{}
    app.directive("iso1",function(){
        return {
            template:"<h2>First name is :{{fname}}</h2>",
            scope:{}
        };
    });
    // isolated scope with @
    app.directive("iso2",function(){
        return{
            template:"<h2>First name is:{{firstName}}</h2>",
            scope:{
                firstName:'@'  // one way binding
            }
        };
    });

    // isolated scope with @ alias name
    app.directive("iso3",function(){
        return{
            template:'<div><h2>First name is:{{firstName}}</h2><input type="text" ng-model="firstName"></div>',
            scope:{
                firstName:'@fn'
            }
        };
    });
    
    // isolated scope with =
    app.directive("iso4",function(){
        return{
            template:'<div><h2>First name is:{{firstName}}</h2><input type="text" ng-model="firstName"></div>',
                        
            scope:{
                firstName:'='   //  two way binding
            }
        };
    });
    
    
    // isolated scope with &
   app.directive("iso5",function(){
        return{
            template:'<button ng-click="done()">Click</button>',
                        
            scope:{
                done:'&'   //  two way binding
            }
        };
    });
    

    
})();



/*
    scope : "false"   It is default. And in this directive will inherit from controller in the same scope. This means any changes to the controller or directive will be in sync.
    
    scope : "true"    In this directive will inherit from controller but it will create child scope.  Any changes made to this new scope will not reflect back to the parent scope. However, since the new scope is inherited from the parent scope, any changes made in the parent scope i.e. controller will be reflected in the directive scope.


    scope : "true"

Angular JS will create a new scope by inheriting parent scope ( usually controller scope, else application’s root Scope ).

Note : Any changes made to this new scope will not reflect back to the parent scope. However, since the new scope is inherited from the parent scope, any changes made in the parent scope i.e. controller will be reflected in the directive scope.

scope : "false"

The controller and directive are using the same scope object. This means any changes to the controller or directive will be in sync.

scope : "{}"

New scope created for the directive, but it will not be inherited from the parent scope. This new scope also known as Isolated scope because it is completely detached from its parent scope.

*/
