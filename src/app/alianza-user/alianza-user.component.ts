import { Component, OnInit } from '@angular/core';

declare const Parse: any;

@Component({
  selector: 'app-alianza-user',
  templateUrl: './alianza-user.component.html',
  styleUrls: ['./alianza-user.component.css']
})
export class AlianzaUserComponent implements OnInit {

  constructor() { }

  public status2019: boolean = false;
  public status2020: boolean = false;
  public status2021: boolean = false;
  public status2022: boolean = false;
  public status2023: boolean = false;
  public status2024: boolean = false;

  public alianzaUsuarios2019: {
    name: string;
    url: string;
    anio: string;
    type: string;
  }[] = [];

  public alianzaUsuarios2020: {
    name: string;
    url: string;
    anio: string;
    type: string;
  }[] = [];

  public alianzaUsuarios2021: {
    name: string;
    url: string;
    anio: string;
    type: string;
  }[] = [];

  public alianzaUsuarios2022: {
    name: string;
    url: string;
    anio: string;
    type: string;
  }[] = [];

  public alianzaUsuarios2023: {
    name: string;
    url: string;
    anio: string;
    type: string;
  }[] = [];

  public alianzaUsuarios2024: {
    name: string;
    url: string;
    anio: string;
    type: string;
  }[] = [];

  viewStatusF: boolean = false;
  statusFlecha: boolean = false;

  viewStatusF1: boolean = false;
  statusFlecha1: boolean = false;

  viewStatusF2: boolean = false;
  statusFlecha2: boolean = false;

  viewStatusF3: boolean = false;
  statusFlecha3: boolean = false;

  viewStatusF4: boolean = false;
  statusFlecha4: boolean = false;

  viewStatusF5: boolean = false;
  statusFlecha5: boolean = false;

  viewStatusF6: boolean = false;
  statusFlecha6: boolean = false;

  viewStatusF7: boolean = false;
  statusFlecha7: boolean = false;

  viewStatusF8: boolean = false;
  statusFlecha8: boolean = false;

  viewStatusF9: boolean = false;
  statusFlecha9: boolean = false;

  viewStatusF10: boolean = false;
  statusFlecha10: boolean = false;

  ngOnInit(): void {
    this.getAlianzaUsuarios();
  }

  async getAlianzaUsuarios() {
    const estadosFinancieros = Parse.Object.extend('alianzaUsuarios');
    const query = new Parse.Query(estadosFinancieros);

    const results = await query.find();

    for (let i = 0; i < results.length; i++) {
      if (results[i].attributes.documentAnio == "2019") {
        this.alianzaUsuarios2019.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: results[i].attributes.documentType
        });
        this.status2019 = true;
      }

      if (results[i].attributes.documentAnio == "2020") {
        this.alianzaUsuarios2020.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: results[i].attributes.documentType
        });
        this.status2020 = true;
      }

      if (results[i].attributes.documentAnio == "2021") {
        this.alianzaUsuarios2021.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: results[i].attributes.documentType
        });
        this.status2021 = true;
      }

      if (results[i].attributes.documentAnio == "2022") {
        this.alianzaUsuarios2022.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: results[i].attributes.documentType
        });
        this.status2022 = true;
      }

      if (results[i].attributes.documentAnio == "2023") {
        this.alianzaUsuarios2023.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: results[i].attributes.documentType
        });
        this.status2023 = true;
      }
    }
  }

  updateViewStatusF() {
    this.viewStatusF = !this.viewStatusF;
    this.statusFlecha = !this.statusFlecha;
  }

  updateViewStatusF1() {
    this.viewStatusF1 = !this.viewStatusF1;
    this.statusFlecha1 = !this.statusFlecha1;
  }

  updateViewStatusF2() {
    this.viewStatusF2 = !this.viewStatusF2;
    this.statusFlecha2 = !this.statusFlecha2;
  }

  updateViewStatusF3() {
    this.viewStatusF3 = !this.viewStatusF3;
    this.statusFlecha3 = !this.statusFlecha3;
  }

  updateViewStatusF4() {
    this.viewStatusF4 = !this.viewStatusF4;
    this.statusFlecha4 = !this.statusFlecha4;
  }

  updateViewStatusF5() {
    this.viewStatusF5 = !this.viewStatusF5;
    this.statusFlecha5 = !this.statusFlecha5;
  }

  updateViewStatusF6() {
    this.viewStatusF6 = !this.viewStatusF6;
    this.statusFlecha6 = !this.statusFlecha6;
  }

  updateViewStatusF7() {
    this.viewStatusF7 = !this.viewStatusF7;
    this.statusFlecha7 = !this.statusFlecha7;
  }

  updateViewStatusF8() {
    this.viewStatusF8 = !this.viewStatusF8;
    this.statusFlecha8 = !this.statusFlecha8;
  }

  updateViewStatusF9() {
    this.viewStatusF9 = !this.viewStatusF9;
    this.statusFlecha9 = !this.statusFlecha9;
  }

  updateViewStatusF10() {
    this.viewStatusF10 = !this.viewStatusF10;
    this.statusFlecha10 = !this.statusFlecha10;
  }

  redirectURL(url: string) {
    location.href = url;
  }
}
