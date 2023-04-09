import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// PrimeNg
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
// Componentes
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
// Pipes
import { MayusculaPipe } from './pipes/mayuscula.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
   declarations: [
      NumerosComponent,
      NoComunesComponent,
      BasicosComponent,
      OrdenarComponent,
      // Pipes personalizados
      MayusculaPipe,
      VuelaPipe,
      OrdenarPipe
   ],
   exports: [
      NumerosComponent,
      NoComunesComponent,
      BasicosComponent,
      OrdenarComponent
   ],
   imports: [
      CommonModule,
      PrimeNgModule
   ]
})
export class VentasModule { }
