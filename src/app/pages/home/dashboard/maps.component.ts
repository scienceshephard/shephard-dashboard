import { OnInit, Component, NgZone } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [],
  template: `
  <!-- <p>Sales by Country</p> -->
  <div id="map" class='mat-elevation-z6'>
    
  </div>`,
  styles: `
    #map{
      height: 410px;
      border-radius: 20px;
    }
  `
})
export class MapsComponent implements OnInit {
  private map!: L.Map;
  private tileLayer!: L.TileLayer;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.initMap();
    // Listen for theme changes
    const observer = new MutationObserver(() => this.zone.run(() => this.updateTileLayer()));
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }

initMap() {
  const asiaBounds: L.LatLngBoundsExpression = [
    [5, 55],
    [50, 140]
  ];

  this.map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    touchZoom: false,
    dragging: false,
    maxBounds: asiaBounds,
    maxBoundsViscosity: 1.0
  });

  this.map.fitBounds(asiaBounds);
  this.addTileLayer();

  // 🔴 India
  L.polygon([
    [8, 68],
    [37, 68],
    [37, 90],
    [8, 90]
  ], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.3
  }).addTo(this.map).bindPopup('India');

  // 🟢 China
  L.polygon([
    [20, 100],
    [40, 100],
    [40, 120],
    [20, 120]
  ], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.3
  }).addTo(this.map).bindPopup('China');

  // 🔵 Japan
  L.polygon([
    [30, 130],
    [45, 130],
    [45, 145],
    [30, 145]
  ], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.3
  }).addTo(this.map).bindPopup('Japan');

  // 🟣 Pakistan
  L.polygon([
    [24, 60],
    [37, 60],
    [37, 76],
    [24, 76]
  ], {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.3
  }).addTo(this.map).bindPopup('Pakistan');

  // 🟠 Saudi Arabia
  L.polygon([
    [15, 40],
    [30, 40],
    [30, 55],
    [15, 55]
  ], {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.3
  }).addTo(this.map).bindPopup('Saudi Arabia');

  // 🟦 Indonesia
  L.polygon([
    [-10, 95],
    [5, 95],
    [5, 125],
    [-10, 125]
  ], {
    color: 'teal',
    fillColor: 'teal',
    fillOpacity: 0.3
  }).addTo(this.map).bindPopup('Indonesia');
}


  addTileLayer() {
    const isDark = document.body.classList.contains('dark-mode');
    const url = isDark
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    if (this.tileLayer) {
      this.map.removeLayer(this.tileLayer);
    }
    this.tileLayer = L.tileLayer(url, {
      attribution: '© OpenStreetMap contributors'
    });
    this.tileLayer.addTo(this.map);
  }

  updateTileLayer() {
    this.addTileLayer();
  }
}