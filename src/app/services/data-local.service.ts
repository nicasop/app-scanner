import { Injectable } from '@angular/core';
import { Registro } from "../models/registro.models";

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  historial: Registro[] = [];

  constructor() { }

  guardarRegistro( format: string, text: string ){
    const nuevo_registro = new Registro(format,text);
    this.historial.unshift(nuevo_registro);
  }
}
