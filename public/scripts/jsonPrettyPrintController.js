sweetSuite.module.controller('jsonPrettyPrintController', [function () {
    var self = this;
    
    //Straight up swiped this from Stack Overflow
    function syntaxHighlight(json) {
        var jsonObj = JSON.parse(json);
        json = JSON.stringify(jsonObj, undefined, 2);

        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }

    self.jsonText = "";
    
    self.processText = function() {
        var newHtml = syntaxHighlight(self.jsonText);
        $("#json-results-container").empty();
        $("#json-results-container").append('<pre contenteditable="true">' + newHtml + '</pre>');
    }
}]);
 