import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss'],
})
export class TableUsersComponent implements OnInit {
  @Input() user: any;
  name: string;
  email: string;
  id: number;

  constructor() {
    this.name = '';
    this.email = '';
    this.id = 0;
  }

  ngOnInit(): void {
    this.name = this.user.name;
    this.email = this.user.email;
    this.id = this.user.id;
  }
}
