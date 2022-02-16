import { Component, OnInit } from '@angular/core';

declare const Parse: any;

@Component({
  selector: 'app-pp-ss',
  templateUrl: './pp-ss.component.html',
  styleUrls: ['./pp-ss.component.css']
})
export class PpSsComponent implements OnInit {

  public status2019: boolean = false;
  public status2020: boolean = false;
  public status2021: boolean = false;
  public status2022: boolean = false;
  public status2023: boolean = false;
  public status2024: boolean = false;

  public ppss2019: {
    name: string;
    url: string;
    anio: string;
    type: string;
  }[] = [];

  public ppss2020: {
    name: string;
    url: string;
    anio: string;
    type: string;
  }[] = [];

  public ppss2021: {
    name: string;
    url: string;
    anio: string;
    type: string;
  }[] = [];

  public ppss2022: {
    name: string;
    url: string;
    anio: string;
    type: string;
  }[] = [];

  public ppss2023: {
    name: string;
    url: string;
    anio: string;
    type: string;
  }[] = [];

  public ppss2024: {
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

  viewStatusF11: boolean = false;
  statusFlecha11: boolean = false;

  viewStatusF12: boolean = false;
  statusFlecha12: boolean = false;

  viewStatusF13: boolean = false;
  statusFlecha13: boolean = false;

  viewStatusF14: boolean = false;
  statusFlecha14: boolean = false;

  viewStatusF15: boolean = false;
  statusFlecha15: boolean = false;

  viewStatusF16: boolean = false;
  statusFlecha16: boolean = false;

  viewStatusF17: boolean = false;
  statusFlecha17: boolean = false;

  viewStatusF18: boolean = false;
  statusFlecha18: boolean = false;

  viewStatusF19: boolean = false;
  statusFlecha19: boolean = false;

  viewStatusF20: boolean = false;
  statusFlecha20: boolean = false;

  ngOnInit(): void {
    this.getActas();
    this.getCertificadoCapa();
    this.getEvaluaciones();
    this.getOtrosDocumentos();
  }

  /*Mostrar Actas */
  async getActas() {
    const actas = Parse.Object.extend('Actas');
    const query = new Parse.Query(actas);

    const results = await query.find();

    for (let i = 0; i < results.length; i++) {
      if (results[i].attributes.documentAnio == "2019") {
        this.ppss2019.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "1"
        });
        this.status2019 = true;
      }

      if (results[i].attributes.documentAnio == "2020") {
        this.ppss2020.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "1"
        });
        this.status2020 = true;
      }

      if (results[i].attributes.documentAnio == "2021") {
        this.ppss2021.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "1"
        });
        this.status2021 = true;
      }

      if (results[i].attributes.documentAnio == "2022") {
        this.ppss2022.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "1"
        });
        this.status2022 = true;
      }

      if (results[i].attributes.documentAnio == "2023") {
        this.ppss2023.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "1"
        });
        this.status2023 = true;
      }
    }
  }

  /*Mostrar Certificado de Capacitacion */
  async getCertificadoCapa() {
    const certificadoC = Parse.Object.extend('CertificadoCapa');
    const query = new Parse.Query(certificadoC);

    const results = await query.find();

    for (let i = 0; i < results.length; i++) {
      if (results[i].attributes.documentAnio == "2019") {
        this.ppss2019.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "2"
        });
        this.status2019 = true;
      }

      if (results[i].attributes.documentAnio == "2020") {
        this.ppss2020.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "2"
        });
        this.status2020 = true;
      }

      if (results[i].attributes.documentAnio == "2021") {
        this.ppss2021.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "2"
        });
        this.status2021 = true;
      }

      if (results[i].attributes.documentAnio == "2022") {
        this.ppss2022.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "2"
        });
        this.status2022 = true;
      }

      if (results[i].attributes.documentAnio == "2023") {
        this.ppss2023.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "2"
        });
        this.status2023 = true;
      }
    }
  }

  /*Mostrar Certificado de Capacitacion */
  async getEvaluaciones() {
    const EvaluacionesPDF = Parse.Object.extend('Evaluaciones');
    const query = new Parse.Query(EvaluacionesPDF);

    const results = await query.find();

    for (let i = 0; i < results.length; i++) {
      if (results[i].attributes.documentAnio == "2019") {
        this.ppss2019.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "3"
        });
        this.status2019 = true;
      }

      if (results[i].attributes.documentAnio == "2020") {
        this.ppss2020.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "3"
        });
        this.status2020 = true;
      }

      if (results[i].attributes.documentAnio == "2021") {
        this.ppss2021.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "3"
        });
        this.status2021 = true;
      }

      if (results[i].attributes.documentAnio == "2022") {
        this.ppss2022.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "3"
        });
        this.status2022 = true;
      }

      if (results[i].attributes.documentAnio == "2023") {
        this.ppss2023.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "3"
        });
        this.status2023 = true;
      }
    }
  }

  /*Mostrar Otros Documentos */
  async getOtrosDocumentos() {
    const OtrosDocumentos = Parse.Object.extend('OtrosDocumentos');
    const query = new Parse.Query(OtrosDocumentos);

    const results = await query.find();

    for (let i = 0; i < results.length; i++) {
      if (results[i].attributes.documentAnio == "2019") {
        this.ppss2019.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "4"
        });
        this.status2019 = true;
      }

      if (results[i].attributes.documentAnio == "2020") {
        this.ppss2020.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "4"
        });
        this.status2020 = true;
      }

      if (results[i].attributes.documentAnio == "2021") {
        this.ppss2021.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "4"
        });
        this.status2021 = true;
      }

      if (results[i].attributes.documentAnio == "2022") {
        this.ppss2022.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "4"
        });
        this.status2022 = true;
      }

      if (results[i].attributes.documentAnio == "2023") {
        this.ppss2023.push({
          name: results[i].attributes.Name,
          url: results[i].attributes.documentURL,
          anio: results[i].attributes.documentAnio,
          type: "4"
        });
        this.status2023 = true;
      }
    }
  }

  redirectURL(url: string) {
    location.href = url;
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

  updateViewStatusF11() {
    this.viewStatusF11 = !this.viewStatusF11;
    this.statusFlecha11 = !this.statusFlecha11;
  }

  updateViewStatusF12() {
    this.viewStatusF12 = !this.viewStatusF12;
    this.statusFlecha12 = !this.statusFlecha12;
  }

  updateViewStatusF13() {
    this.viewStatusF13 = !this.viewStatusF13;
    this.statusFlecha13 = !this.statusFlecha13;
  }

  updateViewStatusF14() {
    this.viewStatusF14 = !this.viewStatusF14;
    this.statusFlecha14 = !this.statusFlecha14;
  }

  updateViewStatusF15() {
    this.viewStatusF15 = !this.viewStatusF15;
    this.statusFlecha15 = !this.statusFlecha15;
  }

  updateViewStatusF16() {
    this.viewStatusF16 = !this.viewStatusF16;
    this.statusFlecha16 = !this.statusFlecha16;
  }

  updateViewStatusF17() {
    this.viewStatusF17 = !this.viewStatusF17;
    this.statusFlecha17 = !this.statusFlecha17;
  }

  updateViewStatusF18() {
    this.viewStatusF18 = !this.viewStatusF18;
    this.statusFlecha18 = !this.statusFlecha18;
  }

  updateViewStatusF19() {
    this.viewStatusF19 = !this.viewStatusF19;
    this.statusFlecha19 = !this.statusFlecha19;
  }

  updateViewStatusF20() {
    this.viewStatusF20 = !this.viewStatusF20;
    this.statusFlecha20 = !this.statusFlecha20;
  }

}
