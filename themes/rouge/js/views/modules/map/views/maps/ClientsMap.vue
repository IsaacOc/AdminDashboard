<template>

<div>
    <!-- <div v-if="error.length !== 0" bg="danger" class="alert alert-danger px-auto py-2">
      {{ error }}
    </div> -->
    <div class="conatiner mx-auto">
      <div class="bg-white shadow-md rounded mt-1 px-8 pt-2 pb-2 mr-5 mx-4 mb-3">
        <div class="w-full mt-1 mb-3">
          <div id="map"></div>
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
    name: "ClientsMap",
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


        onMounted(() => {
          mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhYWNvIiwiYSI6ImNrdzNzMWk1MjF2OW8yb25veWR0dWtvdTUifQ.B7LDPMiRRcRgdTBnmsD0lQ';

      /**
       * Add the map to the page
       */
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [32.582520, 0.347596],
        zoom: 11,
      });

      const stores = {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [32.582520, 0.347596]
            },
            'properties': {
              'phoneFormatted': '(202) 234-7336',
              'phone': '2022347336',
              'address': '1471 P St NW',
              'city': 'Kamapala',
              'country': 'Uganda',
              'crossStreet': 'at 15th St NW',
              'postalCode': '20005',
              'state': 'D.C.'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [32.60249759, 0.290332172]
            },
            'properties': {
              'phoneFormatted': '(202) 507-8357',
              'phone': '2025078357',
              'address': '2221 I St NW',
              'city': 'Kamapala',
              'country': 'Uganda',
              'crossStreet': 'at 22nd St NW',
              'postalCode': '20037',
              'state': 'D.C.'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [32.585330992, 0.318165394]
            },
            'properties': {
              'phoneFormatted': '(202) 387-9338',
              'phone': '2023879338',
              'address': '1512 Connecticut Ave NW',
              'city': 'Kamapala',
              'country': 'Uganda',
              'crossStreet': 'at Dupont Circle',
              'postalCode': '20036',
              'state': 'D.C.'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [32.624664168, 0.341831966]
            },
            'properties': {
              'phoneFormatted': '(202) 337-9338',
              'phone': '2023379338',
              'address': '3333 M St NW',
              'city': 'Kamapala',
              'country': 'Uganda',
              'crossStreet': 'at 34th St NW',
              'postalCode': '20007',
              'state': 'D.C.'
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [32.55666444, 0.3499986]
            },
            'properties': {
              'phoneFormatted': '(202) 547-9338',
              'phone': '2025479338',
              'address': 'Bwaise',
              'city': 'Kamapala',
              'country': 'Uganda',
              'crossStreet': 'btwn 2nd & 3rd Sts. SE',
              'postalCode': '20003',
              'state': 'D.C.'
            }
          },
        ]
      };

      /**
       * Assign a unique id to each store. You'll use this `id`
       * later to associate each point on the map with a listing
       * in the sidebar.
       */
      stores.features.forEach((store, i) => {
        store.properties.id = i;
      });

      /**
       * Wait until the map loads to make changes to the map.
       */
      map.on('load', () => {
        /**
         * This is where your '.addLayer()' used to be, instead
         * add only the source without styling a layer
         */
        // map.addSource('places', {
        //   'type': 'geojson',
        //   'data': '/api/admin/customer'
        // });

        /* Add the data to your map as a layer */
  map.addLayer({
    id: 'locations',
    type: 'circle',
    filter: ['!', ['has', 'point_count']],
    paint: {
    'circle-color': '#51bbd6',
    'circle-radius': 10,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
    },
    /* Add a GeoJSON source containing place coordinates and information. */
    source: {
      type: 'geojson',
      data: stores
    }
  });

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

      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl());

        /**
         * Add all the things to the page:
         * - The location listings on the side of the page
         * - The markers onto the map
         */
        //buildLocationList(stores);
        //addMarkers();


      //calling getall active customer to the map
        getActiveCustomers(map)
      });

      /**
       * get active customer coordinates from customer api to create geojson for mapbox layout.
       **/
      function getActiveCustomers(map) {
         console.log('customer')
         axios.get('/api/admin/customer')
            .then(res => {
               map.addLayer({
            id: 'route',
            type: 'circle',
            source: {
              'type': 'geojson',
              'data': res.data
            },
            paint: {
              'circle-color': '#ff0000',
              'circle-radius': 10,
              'circle-stroke-width': 1,
              'circle-stroke-color': '#fff'
            }
          });
            })
            .catch(err => {
               console.log(err.message)
            })
      }







      /**
       * Add a marker to the map for every store listing.
       **/
      function addMarkers() {
        /* For each feature in the GeoJSON object above: */
        for (const marker of stores.features) {
          /* Create a div element for the marker. */
          const el = document.createElement('div');
          /* Assign a unique `id` to the marker. */
          el.id = `marker-${marker.properties.id}`;
          /* Assign the `marker` class to each marker for styling. */
          el.className = 'marker';

          /**
           * Create a marker using the div element
           * defined above and add it to the map.
           **/
          new mapboxgl.Marker(el, { offset: [0, -23] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);

          /**
           * Listen to the element and when it is clicked, do three things:
           * 1. Fly to the point
           * 2. Close all other popups and display popup for clicked store
           * 3. Highlight listing in sidebar (and remove highlight for all other listings)
           **/
          el.addEventListener('click', (e) => {
            /* Fly to the point */
            flyToStore(marker);
            /* Close all other popups and display popup for clicked store */
            createPopUp(marker);
            /* Highlight listing in sidebar */
            const activeItem = document.getElementsByClassName('active');
            e.stopPropagation();
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            const listing = document.getElementById(
              `listing-${marker.properties.id}`
            );
            listing.classList.add('active');
          });
        }
      }

      /**
       * Add a listing for each store to the sidebar.
       **/
      function buildLocationList(stores) {
        for (const store of stores.features) {
          /* Add a new listing section to the sidebar. */
          const listings = document.getElementById('listings');
          const listing = listings.appendChild(document.createElement('div'));
          /* Assign a unique `id` to the listing. */
          listing.id = `listing-${store.properties.id}`;
          /* Assign the `item` class to each listing for styling. */
          listing.className = 'item';

          /* Add the link to the individual listing created above. */
          const link = listing.appendChild(document.createElement('a'));
          link.href = '#';
          link.className = 'title';
          link.id = `link-${store.properties.id}`;
          link.innerHTML = `${store.properties.address}`;

          /* Add details to the individual listing. */
          const details = listing.appendChild(document.createElement('div'));
          details.innerHTML = `${store.properties.city}`;
          if (store.properties.phone) {
            details.innerHTML += ` &middot; ${store.properties.phoneFormatted}`;
          }

          /**
           * Listen to the element and when it is clicked, do four things:
           * 1. Update the `currentFeature` to the store associated with the clicked link
           * 2. Fly to the point
           * 3. Close all other popups and display popup for clicked store
           * 4. Highlight listing in sidebar (and remove highlight for all other listings)
           **/
          link.addEventListener('click', function () {
            for (const feature of stores.features) {
              if (this.id === `link-${feature.properties.id}`) {
                flyToStore(feature);
                createPopUp(feature);
              }
            }
            const activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
          });
        }
      }

      /**
       * Use Mapbox GL JS's `flyTo` to move the camera smoothly
       * a given center point.
       **/
      function flyToStore(currentFeature) {
        map.flyTo({
          center: currentFeature.geometry.coordinates,
          zoom: 15
        });
      }

      /**
       * Create a Mapbox GL JS `Popup`.
       **/
      function createPopUp(currentFeature) {
        const popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();
        const popup = new mapboxgl.Popup({ closeOnClick: false })
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML(
            `<h3>Sweetgreen</h3><h4>${currentFeature.properties.address}</h4>`
          )
          .addTo(map);
      }
        const onChange = (event) => {
        };

        return {
          onChange,
          //activeCustomer,
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
        background-image: url(./img/marker.png);
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