require(["gitbook"], function(gitbook) {

    var autoSizeIframes = function(){
    	alert(1);
    };

    gitbook.events.bind("start", function(e, config) {
    	pluginConfig = config;
    	autoSizeIframes();
    });

    gitbook.events.bind("page.change", function() {
    	autoSizeIframes();
    });

    gitbook.events.bind("exercise.submit", function(e, data) {
        
    });
});