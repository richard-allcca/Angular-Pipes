import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulo Personalizado de Prime Ng
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
// shared

@NgModule({
   declarations: [],
   exports: [
      ButtonModule,
      CardModule,
      MenubarModule,
   ],
   imports: [
      CommonModule
   ]
})
export class PrimeNgModule { }
