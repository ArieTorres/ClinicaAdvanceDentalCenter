import { Component, OnInit } from '@angular/core';

declare const Parse: any;

@Component({
  selector: 'app-pp-ss',
  templateUrl: './pp-ss.component.html',
  styleUrls: ['./pp-ss.component.css']
})
export class PpSsComponent implements OnInit {
  
  viewStatusF: boolean = false;
  statusFlecha: boolean = false;

  viewStatusF2: boolean = false;
  statusFlecha2: boolean = false;

  viewStatusF3: boolean = false;
  statusFlecha3: boolean = false;

  viewStatusF4: boolean = false;
  statusFlecha4: boolean = false;

  viewStatusF5: boolean = false;
  statusFlecha5: boolean = false;

  constructor() { }
  public estadosFinancieros: {
    id: number;
    name: string;
    url: string;
  }[] = [];

  public actas: {
    id: number;
    name: string;
    url: string;
  }[] = [];

  public certificados: {
    id: number;
    name: string;
    url: string;
  }[] = [];

  public evaluaciones: {
    id: number;
    name: string;
    url: string;
  }[] = [];

  public otrosDocumento: {
    id: number;
    name: string;
    url: string;
  }[] = [];

  ngOnInit(): void {
    this.getEstadosFinancieros();
    this.getActas();
    this.getCertificadoCapa();
    this.getEvaluaciones();
    this.getOtrosDocumentos();
  }

  async getEstadosFinancieros() {
    const estadosFinancieros = Parse.Object.extend('estadosFinancieros');
    const query = new Parse.Query(estadosFinancieros);

    const results = await query.find();

    for (let i = 0; i < results.length; i++) {
      this.estadosFinancieros.push({
        id: results[i].id,
        name: results[i].attributes.Name,
        url: results[i].attributes.documentURL
      });
    }
  }

  /*Mostrar Actas */
  async getActas() {
    const actas = Parse.Object.extend('Actas');
    const query = new Parse.Query(actas);

    const results = await query.find();

    for (let i = 0; i < results.length; i++) {
      this.actas.push({
        id: results[i].id,
        name: results[i].attributes.Name,
        url: results[i].attributes.documentURL
      });
    }
  }

  /*Mostrar Certificado de Capacitacion */
  async getCertificadoCapa() {
    const certificadoC = Parse.Object.extend('CertificadoCapa');
    const query = new Parse.Query(certificadoC);

    const results = await query.find();

    for (let i = 0; i < results.length; i++) {
      this.certificados.push({
        id: results[i].id,
        name: results[i].attributes.Name,
        url: results[i].attributes.documentURL
      });
    }
  }

  /*Mostrar Certificado de Capacitacion */
  async getEvaluaciones() {
    const EvaluacionesPDF = Parse.Object.extend('Evaluaciones');
    const query = new Parse.Query(EvaluacionesPDF);

    const results = await query.find();

    for (let i = 0; i < results.length; i++) {
      this.evaluaciones.push({
        id: results[i].id,
        name: results[i].attributes.Name,
        url: results[i].attributes.documentURL
      });
    }
  }

  /*Mostrar Otros Documentos */
  async getOtrosDocumentos() {
    const OtrosDocumentos = Parse.Object.extend('OtrosDocumentos');
    const query = new Parse.Query(OtrosDocumentos);

    const results = await query.find();

    for (let i = 0; i < results.length; i++) {
      this.otrosDocumento.push({
        id: results[i].id,
        name: results[i].attributes.Name,
        url: results[i].attributes.documentURL
      });
    }
  }

  redirectURL(url: string) {
    location.href = url;
  }

  /*PARA DESPLEGAR EL PRINCIPAL EVIDENCIA*/
  updateViewStatusF() {
    this.viewStatusF = !this.viewStatusF;
    this.statusFlecha = !this.statusFlecha;
  }
  
  /* DESPLEGAR ACTAS */
  updateViewStatusF2() {
    this.viewStatusF2 = !this.viewStatusF2;
    this.statusFlecha2 = !this.statusFlecha2;
  }

  /* DESPLEGAR CERTIFICADO C */
  updateViewStatusF3() {
    this.viewStatusF3 = !this.viewStatusF3;
    this.statusFlecha3 = !this.statusFlecha3;
  }

  /* DESPLEGAR EVALUACIONES */
  updateViewStatusF4() {
    this.viewStatusF4 = !this.viewStatusF4;
    this.statusFlecha4 = !this.statusFlecha4;
  }

  /* DESPLEGAR EVALUACIONES */
  updateViewStatusF5() {
    this.viewStatusF5 = !this.viewStatusF5;
    this.statusFlecha5 = !this.statusFlecha5;
  }

}
