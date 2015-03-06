sweetSuite.module.controller('ipsumController', ["$routeParams", "siteConfig", "$http", "$log", function ($routeParams, siteConfig, $http, $log) {
    var self = this;

    this.generatedIpsum = null;
    this.generateIpsum = function () {
        $http.get("/api/ipsum").then(function(success) {
           self.generatedIpsum = success.data.text;
        }, 
        function(error) {
            $log.error("Error getting ipsum text from server: " + JSON.stringify(error));
        });
    }

    this.generateIpsum();
}]);
 