import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  inputName: string | undefined;
  inputTel: string | undefined;
  inputMessage: string | undefined;
  mesaggeError: boolean | undefined;
  message: string | undefined;

  constructor(private formBuider: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.mesaggeError = false;
  }

  formContact = this.formBuider.group({
    inputName: [''],
    inputTel: [''],
    inputMessage: ['']
  });

  getForm() {

    this.inputName = this.formContact.controls['inputName'].value;
    this.inputTel = this.formContact.controls['inputTel'].value;
    this.inputMessage = this.formContact.controls['inputMessage'].value;

    if (this.inputName == "" || this.inputTel == "" || this.inputMessage == "") {
      this.mesaggeError = true;
    } else {
      this.message = "https://api.whatsapp.com/send?phone=+573013574306&text=" + "Nombres y Apellidos: " + this.inputName + "%0A%0ANúmero Celular: " + this.inputTel + "%0A%0AMensaje: " + this.inputMessage;
      window.location.href = this.message;
    }
  }
}
