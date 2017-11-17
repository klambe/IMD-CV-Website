// Add url parameter or replace if already exists.
function addUrlParam(url, key, value) {
    var newParam = key+"="+value;
    var result = url.replace(new RegExp("(&|\\?)"+key+"=[^\&|#]*"), '$1' + newParam);
    if (result === url) {
        result = (url.indexOf("?") != -1 ? url.split("?")[0]+"?"+newParam+"&"+url.split("?")[1]
            : (url.indexOf("#") != -1 ? url.split("#")[0]+"?"+newParam+"#"+ url.split("#")[1]
                : url+'?'+newParam));
    }
    return result;
}

// Add and remove autoplay on videos opened in modals
$('.modal.videoModal').on('shown.bs.modal', function() {
    var $iframe = $(this).find('iframe');
    if ($iframe.length) {
        var src = $iframe.attr('src');
        var srcNew = addUrlParam(src, 'autoplay', '1');
        $iframe.attr('src', srcNew);
    }
});
$('.modal.videoModal').on('hide.bs.modal', function() {
    var $iframe = $(this).find('iframe');
    if ($iframe.length) {
        var src = $iframe.attr('src');
        var srcNew = addUrlParam(src, 'autoplay', '0');
        $iframe.attr('src', srcNew);
    }
});