import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {
  title: string = 'Inicio';

  constructor() { }

  ngOnInit() {
    // No necesitas establecer el título en el documento aquí, ya que lo estamos manejando en la plantilla HTML.
  }

}
