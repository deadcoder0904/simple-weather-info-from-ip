$(document).ready(function () {
    var img = $('.myimg #weather-img');
    var city = $('#city');
    var lat = $('#lat');
    var long = $('#long');
    var desc = $('#desc');
    var temp = $('#temp');
    var ip = $('#ip');
    $.getJSON('http://ipinfo.io').then(function(data){
        console.log(data);
        ip.text(data.ip);
        var encodedLocation = encodeURIComponent(data.city || data.country);
        return $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + encodedLocation + "&appid=a8b5349c892a03500e6661474d0a1dd9");
    }).then(function (result) {
        console.log(result);
        img.attr('src',"http://openweathermap.org/img/w/"+ result.weather[0].icon + ".png");
        city.attr("href","https://www.google.co.in/#q=" + result.name).text(result.name);
        lat.text(result.coord.lat);
        long.text(result.coord.lon);
        desc.text(result.weather[0].description);
        temp.text(Math.round(result.main.temp * 9.0/5 + 32) + " °F or " + result.main.temp + " °C");
    });
});