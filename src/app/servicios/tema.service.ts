import { AlmacenamientoService } from './almacenamiento.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  enModoOscuro: boolean = null;

  constructor(
    private almacenamiento: AlmacenamientoService
  ) { 
    this.obtenerPreferenciaTema();
  }
  
  async obtenerPreferenciaTema(){
    const preferenciaGuardada = await this.almacenamiento.get('oscuro');
    const preferenciaSistema = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.enModoOscuro  = (preferenciaGuardada != undefined)? preferenciaGuardada : preferenciaSistema;
    if(this.enModoOscuro) document.body.classList.toggle('dark');
  }

  cambiarTema(){
    this.enModoOscuro = !this.enModoOscuro;
    this.almacenamiento.set('oscuro',this.enModoOscuro);
    document.body.classList.toggle('dark');
  }

  obtenerEnModoOscuro(){
    return this.enModoOscuro;
  }
}
