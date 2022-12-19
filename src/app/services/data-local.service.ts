import { Injectable } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Registro } from "../models/registro.models";
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  historial: Registro[] = [];

  constructor( private navCtrl: NavController, private nativeStorage:NativeStorage,private browser:InAppBrowser, private toast: ToastController ) { 
    this.cargarDatos();
   }

  async cargarDatos(){
    this.historial = await this.nativeStorage.getItem("registros") || [];
  }

  guardarRegistro( format: string, text: string ){
    this.navCtrl.navigateForward("/tabs/tab2");
    const nuevo_registro = new Registro(format,text);
    this.historial.unshift(nuevo_registro);
    this.nativeStorage.setItem("registros",this.historial);
    this.abrirRecurso(nuevo_registro);
  }

  abrirRecurso(registro: Registro){
    switch(registro.format){
      case 'http':
        this.browser.create(registro.text,'_System');
        break;
      case 'geo':
        this.navCtrl.navigateForward(`/tabs/tab2/mapa/${registro.text}`);
        break;
      default:
        this.showToast('bottom');
        break;
    }
  }


  async showToast(position: 'top' | 'middle' | 'bottom'){
    const toast = await this.toast.create({
      message: 'Error al scannear código QR',
      duration: 1500,
      position: position
    });
    await toast.present();
  } 
}
