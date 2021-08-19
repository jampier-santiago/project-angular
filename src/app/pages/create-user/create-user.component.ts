import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: number;
  identification: number;
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  user: User;
  message: string;

  constructor(private userService: CrudService) {
    this.user = {
      name: '',
      identification: 0,
      phoneNumber: 0,
      email: '',
      id: '',
    };

    this.message = '';
    this.createId();
  }

  ngOnInit(): void {}

  // Metodo para validar la información del formulario
  validateData(): void {
    const { name, identification, id, email, phoneNumber } = this.user;
    const characters =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name != '' && name.trim() != '') {
      if (phoneNumber != 0) {
        if (identification != 0) {
          if (this.validateIdentification(identification)) {
            if (characters.test(email)) {
              if (this.validateEmail(email)) {
                this.userService.createUser(this.user);
                this.message = 'Usuario creado con éxito.';
              } else {
                this.message = 'El correo ya existe.';
              }
            } else {
              this.message = 'El correo no tiene un formato valido.';
            }
          } else {
            this.message = 'El número de identificación ya existe.';
          }
        } else {
          this.message = 'El número de identificación esta vacío';
        }
      } else {
        this.message = 'El número de celular esta vacío';
      }
    } else {
      this.message = 'El nombre esta vacío';
    }
  }

  // Metodo para actualizar el mensaje
  updateMessage(value: string): void {
    this.message = value;
  }

  // Metodo para crear el id
  createId() {
    const interval = setInterval(() => {
      const usersQuantity = this.userService.getUsers();

      if (usersQuantity) {
        clearInterval(interval);
        let idCreated = true;
        let id = '';

        do {
          for (let index = 0; index < 5; index++) {
            id += Math.floor(Math.random() * (9 - 0) + 0);
          }

          if (usersQuantity) {
            usersQuantity.forEach((user: any) => {
              if (user.id == id) {
                idCreated = false;
              }
            });
          } else {
            idCreated = false;
          }
        } while (!idCreated);

        this.user.id = id;
      }
    }, 30);
  }

  // Metodo para validar el email
  validateEmail(email: string): boolean {
    const usersQuantity = this.userService.getUsers();

    let permitted = true;

    usersQuantity.forEach((user: any) => {
      if (user.email == email) {
        permitted = false;
      }
    });

    return permitted;
  }

  // Metodo para validar el número de identificación
  validateIdentification(identification: string | number): boolean {
    const usersQuantity = this.userService.getUsers();

    let permitted = true;

    usersQuantity.forEach((user: any) => {
      if (user.identification == identification) {
        permitted = false;
      }
    });

    return permitted;
  }
}
