import { Component } from '@angular/core';
// tipado para los items de menu
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  items: MenuItem[] = [];

  // NOTE - El routerLink puede ser usado para redireccionar a una ruta. en la estructura de los items del menú.

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes',
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar',
      },
    ];
  }
}
