<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Demo: Get started with the Map Matching API</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Import Mapbox GL JS  -->
    <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js"></script>
    <link
      href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
      rel="stylesheet"
    />
    <!-- Import Mapbox GL Draw -->
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.0.9/mapbox-gl-draw.js"></script>
    <link
      rel="stylesheet"
      href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.0.9/mapbox-gl-draw.css"
      type="text/css"
    />
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }

      #map {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
      }

      .info-box {
        position: absolute;
        margin: 20px;
        width: 25%;
        top: 0;
        bottom: 20px;
        padding: 20px;
        background-color: #fff;
        overflow-y: scroll;
      }
    </style>
  </head>

  <body>
  <!-- Import Mapbox GL geocoder -->
  <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.min.js"></script>
  <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css" type="text/css">
  
  <style>
  #geocoder-container > div {
  min-width: 50%;
  margin-left: 25%;
  }
  </style>

    <!-- Create a container for the map -->
    <div id="map"></div>
    <!-- Create a container for the instructions and directions -->
    <div class="info-box">
      <p>
        Draw your route using the draw tools on the right. To get the most
        accurate route match, draw points at regular intervals.
      </p>
      <div id="directions"></div>
    </div>

    <script>
      // Add your Mapbox access token
      mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhYWNvIiwiYSI6ImNrdzNzMWk1MjF2OW8yb25veWR0dWtvdTUifQ.B7LDPMiRRcRgdTBnmsD0lQ';
      navigator.geolocation.getCurrentPosition(
          (pos) => {
            const map = new mapboxgl.Map({
        container: 'map', // Specify the container ID
        style: 'mapbox://styles/mapbox/streets-v11', // Specify which map style to use
        center: [pos.coords.longitude, pos.coords.latitude], // Specify the starting position
        zoom: 14.5 // Specify the starting zoom
      });

      const marker = new mapboxgl.Marker()
      .setLngLat([pos.coords.longitude, pos.coords.latitude])
      .addTo(map);
          
      

      const draw = new MapboxDraw({
        // Instead of showing all the draw tools, show only the line string and delete tools
        displayControlsDefault: false,
        controls: {
          line_string: true,
          trash: true
        },
        // Set the draw mode to draw LineStrings by default
        defaultMode: 'draw_line_string',
        styles: [
          // Set the line style for the user-input coordinates
          {
            'id': 'gl-draw-line',
            'type': 'line',
            'filter': [
              'all',
              ['==', '$type', 'LineString'],
              ['!=', 'mode', 'static']
            ],
            'layout': {
              'line-cap': 'round',
              'line-join': 'round'
            },
            'paint': {
              'line-color': '#438EE4',
              'line-dasharray': [0.2, 2],
              'line-width': 2,
              'line-opacity': 0.7
            }
          },
          // Style the vertex point halos
          {
            'id': 'gl-draw-polygon-and-line-vertex-halo-active',
            'type': 'circle',
            'filter': [
              'all',
              ['==', 'meta', 'vertex'],
              ['==', '$type', 'Point'],
              ['!=', 'mode', 'static']
            ],
            'paint': {
              'circle-radius': 12,
              'circle-color': '#FFF'
            }
          },
          // Style the vertex points
          {
            'id': 'gl-draw-polygon-and-line-vertex-active',
            'type': 'circle',
            'filter': [
              'all',
              ['==', 'meta', 'vertex'],
              ['==', '$type', 'Point'],
              ['!=', 'mode', 'static']
            ],
            'paint': {
              'circle-radius': 8,
              'circle-color': '#438EE4'
            }
          }
        ]
      });


      const locateUser = new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
      });

            
      const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      marker: {
      color: 'orange'
      },
      mapboxgl: mapboxgl
      });
      
      //add geocoder to the map
      map.addControl(geocoder);

      // Add the draw tool to the map
      map.addControl(draw);
      
      // Add geolocate control to the map.
      map.addControl(locateUser);
            
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl());

      // Add create, update, or delete actions
      map.on('draw.create', updateRoute);
      map.on('draw.update', updateRoute);
      map.on('draw.delete', removeRoute);

      // Use the coordinates you just drew to make the Map Matching API request
      function updateRoute() {
        removeRoute(); // Overwrite any existing layers

        const profile = 'driving'; // Set the profile

        // Get the coordinates
        const data = draw.getAll();
        const lastFeature = data.features.length - 1;
        const coords = data.features[lastFeature].geometry.coordinates;
        // Format the coordinates
        const newCoords = coords.join(';');
        // Set the radius for each coordinate pair to 25 meters
        const radius = coords.map(() => 25);
        getMatch(newCoords, radius, profile);
      }

      // Make a Map Matching request
      async function getMatch(coordinates, radius, profile) {
        // Separate the radiuses with semicolons
        const radiuses = radius.join(';');
        // Create the query
        const query = await fetch(
          `https://api.mapbox.com/matching/v5/mapbox/${profile}/${coordinates}?geometries=geojson&radiuses=${radiuses}&steps=true&access_token=${mapboxgl.accessToken}`,
          { method: 'GET' }
        );
        const response = await query.json();
        // Handle errors
        if (response.code !== 'Ok') {
          alert(
            `${response.code} - ${response.message}.\n\nFor more information: https://docs.mapbox.com/api/navigation/map-matching/#map-matching-api-errors`
          );
          return;
        }
        const coords = response.matchings[0].geometry;
        // Draw the route on the map
        addRoute(coords);
        getInstructions(response.matchings[0]);
      }

      function getInstructions(data) {
        // Target the sidebar to add the instructions
        const directions = document.getElementById('directions');
        let tripDirections = '';
        // Output the instructions for each step of each leg in the response object
        for (const leg of data.legs) {
          const steps = leg.steps;
          for (const step of steps) {
            tripDirections += `<li>${step.maneuver.instruction}</li>`;
          }
        }
        directions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
          data.duration / 60
        )} min.</strong></p><ol>${tripDirections}</ol>`;
      }

      // Draw the Map Matching route as a new layer on the map
      function addRoute(coords) {
        // If a route is already loaded, remove it
        if (map.getSource('route')) {
          map.removeLayer('route');
          map.removeSource('route');
        } else {
          map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': {
              'type': 'geojson',
              'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': coords
              }
            },
            'layout': {
              'line-join': 'round',
              'line-cap': 'round'
            },
            'paint': {
              'line-color': '#03AA46',
              'line-width': 8,
              'line-opacity': 0.8
            }
          });
        }
      }

      // If the user clicks the delete draw button, remove the layer if it exists
      function removeRoute() {
        if (!map.getSource('route')) return;
        map.removeLayer('route');
        map.removeSource('route');
      }
    },

(err) => { console.error(err); },

{
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}
);
    </script>
  </body>
</html>
<?php /**PATH C:\xampp\htdocs\RougeDev\Modules\Map\src/views/index.blade.php ENDPATH**/ ?>