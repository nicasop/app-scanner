import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit{

  lat: number = 0;
  lon: number = 0;
  map!: Leaflet.Map;
  constructor( private router:ActivatedRoute ) { }

  ngOnInit() {
    let geo: any = this.router.snapshot.paramMap.get('geo');
    geo = geo.substring(4);
    geo = geo.split(',');
    this.lat = Number(geo[0]);
    this.lon = Number(geo[1]);
  }

  ionViewDidEnter() { 
    this.leafletMap();
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  leafletMap() {
    this.map = new Leaflet.Map('mapId').setView([this.lat, this.lon], 17);

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    const markPoint = Leaflet.marker([this.lat, this.lon]);
    markPoint.bindPopup('<p>Scanned Ubication.</p>');
    this.map.addLayer(markPoint);
  }
}
