import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Registro } from "../models/registro.models";
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  historial: Registro[] = [];

  constructor( private navCtrl: NavController, private nativeStorage:NativeStorage ) { 
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
  }
}
