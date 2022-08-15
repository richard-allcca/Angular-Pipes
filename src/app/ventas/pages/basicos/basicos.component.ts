import { Component } from '@angular/core';

@Component({
   selector: 'app-basicos',
   templateUrl: './basicos.component.html',
   styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

   nombreUpper: string = 'RICHARD ALLCCA';
   nombreLower: string = 'richard allcca';
   nombreCompleto: string = 'RicHard AllCca';

   date: Date = new Date();

}
