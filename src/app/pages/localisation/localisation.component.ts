import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
//import * as L from 'leaflet'; // Importer Leaflet
//declare var $: any;
import * as L from 'leaflet';
@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})
export class LocalisationComponent implements OnInit,OnDestroy{

  constructor(){}
  
 

  @Output() locationSelected = new EventEmitter<{ latitude: number, longitude: number }>();

  map: any;
  marker: any;

  ngOnInit(): void {
    // Initialiser la carte dès que le composant est prêt
    this.initMap();
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.off();
      this.map.remove();
     // Assurez-vous de supprimer la carte lors de la destruction du composant
    }
  }
  

  initMap() {
    if (!this.map) {
      this.map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      this.map.on('click', (e: any) => {
        const latlng = e.latlng;
        this.updateMarker(latlng.lat, latlng.lng);
        this.locationSelected.emit({ latitude: latlng.lat, longitude: latlng.lng });
      });
    }
  }


  updateMarker(latitude: number, longitude: number) {
    if (this.marker) {
      this.marker.setLatLng([latitude, longitude]);
    } else {
      this.marker = L.marker([latitude, longitude]).addTo(this.map);
    }
    this.map.setView([latitude, longitude], 13);
  }
}