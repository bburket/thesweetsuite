sweetSuite.module.controller('mainController', ["$route", "$scope", "siteConfig", function ($route, $scope, siteConfig) {
    
    var self = this;
    
    function setSelectedPlugin() {
        var pluginName = $route.current && $route.current.params.toolName ? $route.current.params.toolName : "home";
        self.selectedPlugin = siteConfig.plugins[pluginName];
    }
    
    $scope.$on('$viewContentLoaded', function () {
        setSelectedPlugin();
    });
    
    setSelectedPlugin();
    
    this.plugins = siteConfig.plugins;
}]);
