describe("AngularJs Application unit Testing", function () {
    
    beforeEach(module("unitTestAngular"));
    
    describe("Testing controller", function () {
        
        var scope, ctrl;
        
        beforeEach(inject(function($controller, $rootScope) {
                scope = $rootScope.$new();
                ctrl = $controller('appCtrl', {$scope:scope});
            }));
        
        it("title should be initialize in scope", function () {            
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("Testing AngularJs Application");
        });
        
        it("should add 2 destinations to destinations list", function(){
            expect(scope.destinations).toBeDefined();
            expect(scope.destinations.length).toBe(0);
            
           
        });
    });
});

// To create karma.conf.js     karma init
//  To start karma use  following command 
//  karma start karma.conf.js
// install phantomjs globally
// npm install    bower install in respected folders
