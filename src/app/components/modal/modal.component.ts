import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() message: string;
  @Output() newMessage: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.message = 'hola';
  }

  ngOnInit(): void {}

  // Metodo para cerrar el modal
  closeModal(): void {
    this.newMessage.emit('');
  }
}
