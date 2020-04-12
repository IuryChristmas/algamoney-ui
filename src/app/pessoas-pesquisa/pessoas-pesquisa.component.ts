import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    { nome: 'Iury', cidade: 'Fortaleza', estado: 'CE', status: true},
    { nome: 'Andrea', cidade: 'Fortaleza', estado: 'CE', status: true},
    { nome: 'Wallace', cidade: 'Fortaleza', estado: 'CE', status: false},
    { nome: 'Wleydstone', cidade: 'Fortaleza', estado: 'CE', status: false},
    { nome: 'Cara de Cachorro', cidade: 'Fortaleza', estado: 'CE', status: true},
    { nome: 'Edmara', cidade: 'Fortaleza', estado: 'CE', status: false},
    { nome: 'Cris', cidade: 'Fortaleza', estado: 'CE', status: true}
  ];

}
