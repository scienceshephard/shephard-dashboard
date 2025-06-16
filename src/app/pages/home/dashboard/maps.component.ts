import { OnInit, Component } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [],
  template: `
    <div id="map"></div>
  `,
  styles: `
    #map{
      height: 400px;
      border-radius: 20px;
    }
  `
})
export class MapsComponent implements OnInit{
  constructor(){}
  
  ngOnInit(){
    const asiaBounds: L.LatLngBoundsExpression = [
      [5, 55],
      [50, 140]
    ];

    const map = L.map('map', {
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      dragging: false,
      maxBounds: asiaBounds,
      maxBoundsViscosity: 1.0
    });

    map.fitBounds(asiaBounds);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Rough polygon over India (just approximate shape)
    L.polygon([
      [8, 68],
      [37, 68],
      [37, 90],
      [8, 90]
    ], {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.3
    }).addTo(map).bindPopup('India');

    // Rough polygon over China
    L.polygon([
      [20, 100],
      [40, 100],
      [40, 120],
      [20, 120]
    ], {
      color: 'green',
      fillColor: 'green',
      fillOpacity: 0.3
    }).addTo(map).bindPopup('China');

  }
}
