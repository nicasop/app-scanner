import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( public dataLocal: DataLocalService,private alert:AlertController ) {}

  abrirRegistro(registro:any){
    console.log("Registro",registro);
    this.dataLocal.abrirRecurso(registro);
    // let text = registro.split(";")
    // this.presentAlert(registroArray);
  }

  // async viewInformation(registro: any) {
  //   console.log("Registro",registro);
  //   let text = registro.split(";")
  //   const alert = await this.alert.create({
  //     header: 'Information',
  //     subHeader:'Producto: ' + text[1],
  //     message: 'Cantidad: '+ text[4]
  //             +'\nMarca: '+ text[3]
  //             +'\nTipo: '+text[2],
  //     buttons: ['OK'],
  //   });
  //   await alert.present();
  // }

}
