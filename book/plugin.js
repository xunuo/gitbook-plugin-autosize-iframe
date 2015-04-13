require(["gitbook"], function(gitbook) {

    var autoSizeIframes = function(){
        var iframes = document.getElementsByTagName('iframe');
        for(var i = 0; i < iframes.length; i++) {
            var iframe = iframes[i],
                iframeDocument = iframe.contentDocument.documentElement
                ;

            iframe.setAttribute('scrolling','no');
            iframe.style.boxSizing = 'content-box';

            iframe.style.height = iframeDocument.scrollHeight + 'px';
            iframe.style.width = iframeDocument.scrollWidth + 'px';
        }
    };

    gitbook.events.bind("start", function(e, config) {
        pluginConfig = config;
    });

    gitbook.events.bind("page.change", function() {
        setInterval(function(){
            autoSizeIframes();
        },200);

    });

    gitbook.events.bind("exercise.submit", function(e, data) {
        
    });
});