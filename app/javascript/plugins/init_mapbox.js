

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const initMapbox = () => {

  const mapElement = document.querySelector('#map');
  const longit = -0.5330445946382781;
  const latit = 44.87701321269124;

  const longit_2 =  4.041353889250085;
  const latit_2 =  49.006563918218276;

  const longit_fr = 2.4432630256589425;
  const latit_fr = 46.58634812357092;




  const fitMapToMarkers = (map, markers) => {
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
    map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
  };

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longit_fr, latit_fr ],
      zoom: 4.6
    });

    // Create a HTML element for your custom marker
    const element = document.createElement('div');
    element.className = 'marker';
    // <i class="fas fa-home"></i>


    element.style.backgroundImage = `url('${mapElement.dataset.homeUrl}')`;

    const element_2 = document.createElement('div');
    element_2.className = 'marker';
    element_2.style.backgroundImage = `url('${mapElement.dataset.grapeUrl}')`;


    let theMark = new mapboxgl.Marker(element);
    theMark.setLngLat([longit, latit]);
    theMark.addTo(map);

    let theMark_2 = new mapboxgl.Marker(element_2);
    theMark_2.setLngLat([longit_2, latit_2]);
    theMark_2.addTo(map);

    let markers = [{"lng": longit, "lat":latit }, {"lng": longit_2, "lat":latit_2 }];

    // zoomOnFrance(map);
    // fitMapToMarkers(map, markers);


    element.addEventListener('click', (event) => {
      // fitMapToMarkers(map, markers);
    });
  }

};

export { initMapbox };


// 49.006563918218276, 4.041353889250085
