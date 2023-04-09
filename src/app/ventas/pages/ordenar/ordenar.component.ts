import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  boleano: boolean = true;
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Super man',
      vuela: true,
      color: Color.Azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.Negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.Verde
    },
    {
      nombre: 'Dark devil',
      vuela: false,
      color: Color.Rojo
    },
  ];

  enMayuscula() {
    this.boleano = !this.boleano;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }

}
