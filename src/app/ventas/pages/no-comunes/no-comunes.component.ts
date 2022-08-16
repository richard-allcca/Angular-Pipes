import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

   // i18nSlect
   nombre: string = 'Cristina';
   genero: string = 'Femenino';

   invitacionMap = {
      'Masculino': 'invitarlo',
      'Femenino': 'invitarla',
   }

   // i18nPlural
   clientes: string[] = ['Richard', 'Juan', 'Pedro'];

   registrosMap = {
      '=0': 'No hay clientes esperando',
      '=1': 'Hay un cliente esperando',
      'other': 'Hay # clientes esperando'
   }

   cambiarNombre() {
      this.nombre == 'Cristina' ? this.nombre = 'Gatita' : this.nombre = 'Sin alias'
   }

   // Pipe Slice
   borrarCliente() {
      this.clientes.pop();
   }

   // Pipe KeyValue - te ayuda a iterar un objeto con "ngFor"
   persona = {
      nombre: 'Richard',
      edad: 35,
      direccion: 'Calle falsa 123'
   }

   // Pipe json
   heroes = [
      {
         nombre: 'Batman', poder: 'Dinero'
      },
      {
         nombre: 'Superman', poder: 'volar'
      }
   ]

   // Async Pipe - te permite hacer peticiones asincronas, tiene como condición que sea Observable o Promise
   miObservable = interval(1000);

   valorPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve('Llego la data luego de 3.5 segundos');
      }, 3500);
   })
}
