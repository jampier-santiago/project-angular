import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  private routes: string[];
  private activePage = new Subject<string>();
  private seeMenu = new Subject<boolean>();

  constructor() {
    this.routes = [
      'inicio',
      'lista usuarios',
      'editar usuarios',
      'crear usuario',
      'ver usuario',
    ];
  }

  // Metodo encargado de devolver las rutas
  getRoutes(): string[] {
    return this.routes;
  }

  // Metodo encargado de devolver el nombre de la ruta utilizada
  getActivePage(): Observable<string> {
    return this.activePage.asObservable();
  }

  // Metodo encargado de actiualizar el nombre del menu
  updateNameActivePage(name: string): void {
    this.activePage.next(name);
  }

  // Metodo encargado de crear las rutas con respecto al nombre utilizado
  createRoute(name: string, id?: number): string {
    let route: string = '';

    if (name == 'inicio') {
      route = ``;
    } else if (name == 'lista usuarios') {
      route = `/usuarios`;
    } else {
      const action = name.split(' ')[0];

      if (action == 'crear') {
        route = `usuarios/${action}`;
      } else {
        route = `usuarios/${action}/${id ? id : ''}`;
      }
    }

    return route;
  }
}
