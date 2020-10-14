import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { PessoaFilter } from 'src/app/filter/pessoa-filter';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  pessoas = [];
  filtro = new PessoaFilter();
  totalElements = 0;

  constructor(private pessoaService: PessoaService) {}

  ngOnInit() { }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar(this.filtro)
      .subscribe(res => {
        this.pessoas = res.content;
        this.totalElements = res.totalElements;
        this.filtro.pagina = res.number;
        this.filtro.itensPorPagina = res.size;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }
}
