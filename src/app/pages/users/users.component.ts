import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  listUsers: any;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    const interval = setInterval(() => {
      const data = this.crudService.getUsers();
      if (data) {
        clearInterval(interval);
        this.listUsers = data;
      }
    });
    console.log(this.listUsers);
  }
}
