import { LancamentoFilter } from './../../filter/lancamento-filter';
import { LancamentoService } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos = [];
  filtro = new LancamentoFilter();
  totalElements = 0;

  constructor(private lancamentoService: LancamentoService) {}

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.lancamentoService.pesquisar(this.filtro)
      .subscribe(res => {
        this.lancamentos = res.content;
        this.totalElements = res.totalElements;
        this.filtro.pagina = res.number;
        this.filtro.itensPorPagina = res.size;
      });
  }

}
