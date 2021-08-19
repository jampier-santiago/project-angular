import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { RoutesService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  routes: string[];

  constructor(
    private routesService: RoutesService,
    private crudService: CrudService
  ) {
    this.routes = [];
  }

  ngOnInit(): void {
    const routes = [...this.routesService.getRoutes()];
    routes.shift();
    this.routes = routes;
  }
}
