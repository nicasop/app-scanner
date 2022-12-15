import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  lat: number = 0;
  lon: number = 0;
  constructor( private router:ActivatedRoute ) { }

  ngOnInit() {
    let geo: any = this.router.snapshot.paramMap.get('geo');
    geo = geo.substr(4);
    geo = geo.split(',');
    this.lat = Number(geo[0]);
    this.lon = Number(geo[1]);
  }

}
