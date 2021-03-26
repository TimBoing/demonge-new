import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const initMapbox = () => {

  const mapElement = document.querySelector('#map');
  const longit = -0.5330445946382781;
  const latit = 44.87701321269124;

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
      center: [-0.5330445946382781, 44.87701321269124 ],
      zoom: 10
    });

    // Create a HTML element for your custom marker
    const element = document.createElement('div');
    element.className = 'marker';
    element.style.backgroundImage = `url('${mapElement.dataset.imageUrl}')`;


    let theMark = new mapboxgl.Marker(element);
    theMark.setLngLat([-0.5330445946382781, 44.87701321269124]);
    theMark.addTo(map);

    let markers = [{"lng": -0.5330445946382781, "lat":44.87701321269124 }];
    // fitMapToMarkers(map, markers);


    element.addEventListener('click', (event) => {
      fitMapToMarkers(map, markers);
    });
  }

};

export { initMapbox };
