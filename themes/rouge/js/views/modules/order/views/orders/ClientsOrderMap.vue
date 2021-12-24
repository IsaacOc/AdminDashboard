<template>

<div>
    <!-- <div v-if="error.length !== 0" bg="danger" class="alert alert-danger px-auto py-2">
      {{ error }}
    </div> -->
    <div class="conatiner mx-auto">
      <div class="bg-white shadow-md rounded mt-1 px-8 pt-2 pb-2 mr-5 mx-4 mb-3">
        <div class="w-full mt-1 mb-3">
            <div v-if="error.length !== 0" bg="danger" class="alert alert-danger px-auto py-2 center">
              {{ error }}
            </div>
          <div id="map"></div>
          <div class="flex justify-center">
            <form ref="store" class="" @submit.prevent="submit">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Order
              </button>
              </form>
            </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { reactive, onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { mdiEye, mdiTrashCan } from "@mdi/js";
import CheckboxCell from "@/components/CheckboxCell";
import Level from "@/components/Level";
import JbButtons from "@/components/JbButtons";
import JbButton from "@/components/JbButton";
import UserAvatar from "@/components/UserAvatar";
import axios from 'axios';
import mapboxgl from 'mapbox-gl'
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

export default {
    name: "ClientsOrderMap",
    components: {
        CheckboxCell,
        Level,
        JbButtons,
        JbButton,
        //Mapbox,
       // UserAvatar,
    },
    props: {
        checkable: Boolean,
    },
    
    setup() {
        const store = useStore();

        const error = ref("");

        const form = reactive({
          long: "",
          lat: "",
        });

        onMounted(() => {
          mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhYWNvIiwiYSI6ImNrdzNzMWk1MjF2OW8yb25veWR0dWtvdTUifQ.B7LDPMiRRcRgdTBnmsD0lQ';

      /**
       * Add the map to the page
       */
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
          
      form.long = pos.coords.longitude;
      form.lat = pos.coords.latitude;

      // const draw = new MapboxDraw({
      //   // Instead of showing all the draw tools, show only the line string and delete tools
      //   displayControlsDefault: false,
      //   controls: {
      //     line_string: true,
      //     trash: true
      //   },
      //   // Set the draw mode to draw LineStrings by default
      //   defaultMode: 'draw_line_string',
      //   styles: [
      //     // Set the line style for the user-input coordinates
      //     {
      //       'id': 'gl-draw-line',
      //       'type': 'line',
      //       'filter': [
      //         'all',
      //         ['==', '$type', 'LineString'],
      //         ['!=', 'mode', 'static']
      //       ],
      //       'layout': {
      //         'line-cap': 'round',
      //         'line-join': 'round'
      //       },
      //       'paint': {
      //         'line-color': '#438EE4',
      //         'line-dasharray': [0.2, 2],
      //         'line-width': 2,
      //         'line-opacity': 0.7
      //       }
      //     },
      //     // Style the vertex point halos
      //     {
      //       'id': 'gl-draw-polygon-and-line-vertex-halo-active',
      //       'type': 'circle',
      //       'filter': [
      //         'all',
      //         ['==', 'meta', 'vertex'],
      //         ['==', '$type', 'Point'],
      //         ['!=', 'mode', 'static']
      //       ],
      //       'paint': {
      //         'circle-radius': 12,
      //         'circle-color': '#FFF'
      //       }
      //     },
      //     // Style the vertex points
      //     {
      //       'id': 'gl-draw-polygon-and-line-vertex-active',
      //       'type': 'circle',
      //       'filter': [
      //         'all',
      //         ['==', 'meta', 'vertex'],
      //         ['==', '$type', 'Point'],
      //         ['!=', 'mode', 'static']
      //       ],
      //       'paint': {
      //         'circle-radius': 8,
      //         'circle-color': '#438EE4'
      //       }
      //     }
      //   ]
      // });


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
      //map.addControl(draw);
      
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

});
        
    const submit = () => {
      console.log(form);

      const data = new FormData();
        data.append("name", 'fornme'),
        data.append("long", form.long),
        data.append("lat", form.lat);
      axios
        .post("/api/admin/customer", data)
        .then((res) => {
          this.$ref.store.clear();
          //router.push("/storeFront");
        })
        .catch((err) => {
          error.value = err.message;
          console.log(err);
        });
      // console.log(form)
    };

        return {
          submit,
          error,
      };
},
};
</script>

<style>
#map {
    height: 100vh;
}

      * {
        box-sizing: border-box;
      }

      .sidebar {
        width: 33.3333%;
        height: 100vh;
        top: 0;
        left: 0;
        overflow: hidden;
        border-right: 1px solid rgba(0, 0, 0, 0.25);
      }


      h1 {
        font-size: 22px;
        margin: 0;
        font-weight: 400;
        line-height: 20px;
        padding: 20px 2px;
      }

      a {
        color: #404040;
        text-decoration: none;
      }

      a:hover {
        color: #101010;
      }

      .heading {
        background: #fff;
        border-bottom: 1px solid #eee;
        min-height: 60px;
        line-height: 60px;
        padding: 0 10px;
        background-color: #00853e;
        color: #fff;
      }

      .listings {
        height: 100%;
        overflow: auto;
        padding-bottom: 60px;
      }

      .listings .item {
        display: block;
        border-bottom: 1px solid #eee;
        padding: 10px;
        text-decoration: none;
      }

      .listings .item:last-child {
        border-bottom: none;
      }
      .listings .item .title {
        display: block;
        color: #00853e;
        font-weight: 700;
      }

      .listings .item .title small {
        font-weight: 400;
      }
      .listings .item.active .title,
      .listings .item .title:hover {
        color: #8cc63f;
      }
      .listings .item.active {
        background-color: #f8f8f8;
      }
      ::-webkit-scrollbar {
        width: 3px;
        height: 3px;
        border-left: 0;
        background: rgba(0, 0, 0, 0.1);
      }
      ::-webkit-scrollbar-track {
        background: none;
      }
      ::-webkit-scrollbar-thumb {
        background: #00853e;
        border-radius: 0;
      }

      .marker {
        border: none;
        cursor: pointer;
        height: 56px;
        width: 56px;
      }

      /* Marker tweaks */
      .mapboxgl-popup {
        padding-bottom: 50px;
      }

      .mapboxgl-popup-close-button {
        display: none;
      }
      .mapboxgl-popup-content {
        font: 400 15px/22px 'Source Sans Pro', 'Helvetica Neue', sans-serif;
        padding: 0;
        width: 180px;
      }
      .mapboxgl-popup-content h3 {
        background: #91c949;
        color: #fff;
        margin: 0;
        padding: 10px;
        border-radius: 3px 3px 0 0;
        font-weight: 700;
        margin-top: -15px;
      }

      .mapboxgl-popup-content h4 {
        margin: 0;
        padding: 10px;
        font-weight: 400;
      }

      .mapboxgl-popup-content div {
        padding: 10px;
      }

      .mapboxgl-popup-anchor-top > .mapboxgl-popup-content {
        margin-top: 15px;
      }

      .mapboxgl-popup-anchor-top > .mapboxgl-popup-tip {
        border-bottom-color: #91c949;
      }
      #geocoder-container > div {
        min-width: 50%;
        margin-left: 25%;
      }
</style>