import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private barcodeScanner: BarcodeScanner, private dataLocal: DataLocalService ) {}

  Scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData.text);
      this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text);
     }).catch(err => {
      console.log('Error', err);
      this.dataLocal.guardarRegistro("geo", "geo:-01414100,251451114");
     });
  }

}
