var mymap = L.map('leafMapid').setView([39.901996392, 116.38833178], 13);
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: "pk.eyJ1IjoieW91Y2FuZGVsZXRldGhpcyIsImEiOiJjamN4bXRqbDMxbWMzMzJwZ204c3BrOXdoIn0.COM41OPsXdIcWezDTpwrIw"
}).addTo(mymap)
var circle = L.circle([39.901996392, 116.38833178], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 300
}).addTo(mymap)