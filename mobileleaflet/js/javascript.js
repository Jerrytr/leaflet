var mymap = L.map('leafMapid').fitWorld();
            L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                id: "mapbox.streets",
                accessToken: "pk.eyJ1IjoieW91Y2FuZGVsZXRldGhpcyIsImEiOiJjamN4bXRqbDMxbWMzMzJwZ204c3BrOXdoIn0.COM41OPsXdIcWezDTpwrIw"
            }).addTo(mymap)

            function onLocationFound(e) {
                var radius = e.accuracy / 2;

                L.marker(e.latlng).addTo(mymap)
                    .bindPopup("You are within " + radius + " meters from this point").openPopup();

                L.circle(e.latlng, radius).addTo(mymap);
                }

            mymap.on('locationfound', onLocationFound);

            function onLocationError(e) {
               alert(e.message);
            }

            mymap.on('locationerror', onLocationError);
            mymap.locate({setView: true, maxZoom: 16});