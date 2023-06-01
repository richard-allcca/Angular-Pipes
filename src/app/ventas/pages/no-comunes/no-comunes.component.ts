import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  // i18nSlect (valida constra este invitacionMap para mostrar un genero)
  nombre: string = 'Cristina';
  genero: string = 'femenino';

   invitacionMap:{} = {
      'masculino': 'invitarlo',
      'femenino': 'invitarla',
   }

   // i18nPlural (valida contra registrosMap para dar resultado)
   clientes: string[] = ['Richard', 'Juan', 'Pedro'];

   registrosMap:{} = {
      '=0': 'No hay clientes esperando',
      '=1': 'Hay un cliente esperando',
      'other': 'Hay # clientes esperando'
   }

   cambiarInvitado() {
      // this.nombre == 'Cristina' ? this.nombre = 'Gatita' : this.nombre = 'Sin alias'
      this.nombre = 'Richard';
      this.genero = 'masculino'
   }

   // Pipe Slice (hace el corte excluyendo el 2° parametro)
   borrarCliente() {
      this.clientes.pop();
   }

   // Pipe KeyValue (Permite Iterar un Objeto con "ngFor" como si fuera un array)
   persona:{} = {
      nombre: 'Richard',
      edad: 35,
      direccion: 'Calle falsa 123'
   }

   // Pipe json
   heroes:{} = [
      {
         nombre: 'Batman', poder: 'Dinero'
      },
      {
         nombre: 'Superman', poder: 'volar'
      }
   ]

   // Async Pipe, te permite hacer peticiones asincronas
  //  Tiene como condición que sea Observable o Promise
   miObservable:Observable<number> = interval(1000); // 0,1,2,3,4

   valorPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve('Llego la data luego de 3.5 segundos');
      }, 3500);
   })
}
