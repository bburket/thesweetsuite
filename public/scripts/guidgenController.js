sweetSuite.module.controller('guidgenController', function () {
    this.generatedGuid = uuid.v4();

    this.generateGuid = function() {
        this.generatedGuid = uuid.v4();
    }
});
