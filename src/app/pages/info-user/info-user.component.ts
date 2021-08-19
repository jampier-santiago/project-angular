import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: number;
  identification: number;
}

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent implements OnInit {
  action: string | null;
  id: string | null;
  user: User;
  disabled: boolean;
  message: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.action = this.activeRoute.snapshot.paramMap.get('action');
    this.id = this.activeRoute.snapshot.paramMap.get('id');

    this.user = {
      name: '',
      id: '',
      email: '',
      phoneNumber: 0,
      identification: 0,
    };

    this.disabled = false;
    this.message = '';
  }

  ngOnInit(): void {
    const snapshot = this.crudService.getUser(this.id);
    const { name, id, email, phoneNumber, identification } = snapshot;

    this.user = {
      name: name,
      id: id,
      email: email,
      phoneNumber: phoneNumber,
      identification: identification,
    };

    this.disabledInput();
  }

  disabledInput(): void {
    if (this.action != 'editar') {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  // Metodo para actualizar el mensaje
  updateMessage(value: string): void {
    this.message = value;
  }

  // Metodo para validar la información del formulario
  validateData(): void {
    const { name, identification, id, email, phoneNumber } = this.user;
    const characters =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name != '' && name.trim() != '') {
      if (phoneNumber != 0) {
        if (identification != 0) {
          if (characters.test(email)) {
            this.message = 'Datos correctos.';
            this.crudService.updateUser(this.user, id);
          } else {
            this.message = 'El correo no tiene un formato valido.';
          }
        } else {
          this.message = 'El número de identificación esta vacío.';
        }
      } else {
        this.message = 'El número de celular esta vacío.';
      }
    } else {
      this.message = 'El nombre está vacío.';
    }
  }
}
