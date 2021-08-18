import { Component, OnInit } from '@angular/core';
import { RoutesService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  routes: string[];
  seeMenu: boolean;
  activePage: string;

  constructor(private routesService: RoutesService) {
    this.routes = [];

    this.seeMenu = false;
    this.activePage = 'inicio';

    this.routesService.getActivePage().subscribe((name) => {
      this.activePage = name;
    });
  }

  ngOnInit(): void {
    this.routes = this.routesService.getRoutes();
  }

  // Actualizar el estado de la visualización del menu
  updateMenuView(): void {
    this.seeMenu = !this.seeMenu;
  }

  // Metodo encargado de enviar la actualización del nombre utilizado en le menu, para saber en que pagina se encuentra
  updateNameActivePage(name: string): void {
    this.routesService.updateNameActivePage(name);
    this.updateMenuView();
  }

  // Metodo encargado de crear las rutas con respecto al nombre utilizado
  createRoute(name: string, id?: number): string {
    return this.routesService.createRoute(name, id);
  }
}
