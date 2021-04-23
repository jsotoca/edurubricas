import { TemaService } from './../../servicios/tema.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private tema: TemaService
  ) { }

  ngOnInit() { }

  cambiarTema(){
    this.tema.cambiarTema();
  }

}
