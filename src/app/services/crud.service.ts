import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../pages/info-user/info-user.component';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private users: any;
  private identification: number[] = [
    76307332, 10547808, 10516932, 34532270, 576323459, 34531725, 76305729,
    42870562, 975076432, 10537683, 76288230, 76317155, 10536636, 41733718,
    4613691, 634538776, 710545657, 10539634, 34528262, 2899818,
  ];

  constructor(private http: HttpClient) {
    this.getData().subscribe((data) => {
      let phoneNumber = '3';
      const snapshot = data.data;

      snapshot.forEach((user: any, index: number) => {
        for (let index = 0; index < 10; index++) {
          phoneNumber += Math.floor(Math.random() * (9 - 0) + 0);
        }

        user.phoneNumber = phoneNumber;
        user.identification = this.identification[index];
      });

      this.users = snapshot;
    });
  }

  getData(): Observable<any> {
    const result = this.http.get('https://gorest.co.in/public/v1/users');
    return result;
  }

  getUsers(): any {
    return this.users;
  }

  getUser(id: any): any {
    let dataUser = '';
    this.users.forEach((user: any) => {
      if (user.id == id) {
        dataUser = user;
      }
    });

    return dataUser;
  }

  updateUser(infoUser: User, idUser: number | string): void {
    const { name, identification, id, email, phoneNumber } = infoUser;

    const temporaryData = [...this.users];
    temporaryData.forEach((user: any) => {
      if (user.id == idUser) {
        console.log(user);
        user.name = name;
        user.identification = identification;
        user.email = email;
        user.phoneNumber = phoneNumber;
      }
    });

    console.log(temporaryData);
    this.users = temporaryData;
  }

  createUser(user: User): void {
    const listUsers = [...this.users];
    listUsers.push(user);
    this.users = listUsers;
  }
}
