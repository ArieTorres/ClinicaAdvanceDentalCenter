import { Component, OnInit } from '@angular/core';

declare const Parse: any;

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }
  public estadosFinancieros: {
    id: number;
    name: string;
    url: string;
  }[] = [];

  viewStatusF: boolean = false;
  statusFlecha: boolean = false;

  ngOnInit(): void {
    this.getEstadosFinancieros();
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

  redirectURL(url: string) {
    location.href = url;
  }

  updateViewStatusF() {
    this.viewStatusF = !this.viewStatusF;
    this.statusFlecha = !this.statusFlecha;
  }
}
