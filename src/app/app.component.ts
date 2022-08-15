import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   nombre: string = 'richard allcca';
   numero: number = 1000;
   objeto = { clave: 'valor' };

   cambiarNombre(): void {
      this.nombre = 'Cristina';
      console.log(this.nombre);
   }

}