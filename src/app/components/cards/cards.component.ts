import { Component, Input, OnInit } from '@angular/core';
import { RoutesService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() route: string;

  constructor(private routesService: RoutesService) {
    this.route = '';
  }

  ngOnInit(): void {}

  // Metodo encargado de crear las rutas con respecto al nombre utilizado
  createRoute(name: string, id?: number): string {
    return this.routesService.createRoute(name, id);
  }

  // Metodo encargado de enviar la actualización del nombre utilizado en le menu, para saber en que pagina se encuentra
  updateNameActivePage(name: string): void {
    this.routesService.updateNameActivePage(name);
  }
}
