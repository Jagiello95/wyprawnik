import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from "../../../environments/environment";

@Injectable({providedIn: 'root'})

export class MapService {
  map!: mapboxgl.Map;
  // style = 'http://localhost:81/styles/klokantech-basic/style.json';
  // style = 'http://wyprawnik.com/maps/styles/klokantech-basic/style.json';
  style= 'mapbox://styles/mapbox/streets-v11'
  lat = 	50.654;
  lng = 	7.0982;
  zoom = 6
  // 6.904, , 7.331, 
  constructor() {  
    mapboxgl!.accessToken = environment.mapbox.accessToken;
  }
  
  public buildMap() {  
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]  })
      
      this.map.addControl(new mapboxgl.NavigationControl());
      const marker = new mapboxgl.Marker()
      .setLngLat([19.457216, 51.759445])
      .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>")) // add popup
      .addTo(this.map);

    //  this.map.on('load', function () {
    //     this.map.addSource('new', {
    //       'type': 'vector',
    //       "tiles": ["http://localhost:8080/styles/new/{z}/{x}/{y}.pbf"],
    //       "tolerance": 0
    //     });

    //   }, ()=>{
    //     this.map.addLayer({
    //       "id": "road",
    //       "source": "new",
    //       "source-layer": "road",
    //       "type": "line",
    //       "paint": {
    //         "line-color": "#FF0000",
    //         "line-width": 1
    //       }
    //     });
    //   });
      this.map.on('load', ()=>  {
        console.log('on map load')

      // this.map.addSource('bonn', {
      //   'type': 'vector',
      //   "tiles": ["http://localhost:8080/maps/bonn/{z}/{x}/{y}.vector.pbf?"],
      //   // "tolerance": 0
      // });

      // this.map.addLayer({
      //   "id": "road",
      //   "source": "bonn",
      //   "source-layer": "road",
      //   "type": "line",
      //   "paint": {
      //     "line-color": "#FF0000",
      //     "line-width": 1
      //   }
      // });

    }
    )
  }
}