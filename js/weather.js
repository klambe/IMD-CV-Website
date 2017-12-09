// http://simpleweatherjs.com
$(document).ready(function() {
    $.simpleWeather({
        location: 'Dublin, Ireland',
        woeid: '',
        unit: 'c',
        success: function(weather) {
            html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';

            html += ''+weather.city+', '+weather.country+'';
            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
});