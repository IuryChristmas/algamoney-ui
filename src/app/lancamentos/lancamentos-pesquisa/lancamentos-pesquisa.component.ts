import { ErrorHandlerService } from './../../core/error-handler.service';
import { LancamentoFilter } from './../../filter/lancamento-filter';
import { LancamentoService } from './../lancamento.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos = [];
  filtro = new LancamentoFilter();
  totalElements = 0;
  @ViewChild('tabela') grid;

  constructor(
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private errorHandlerService: ErrorHandlerService,
    ) {}

  ngOnInit() {
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
      .subscribe(res => {
        this.lancamentos = res.content;
        this.totalElements = res.totalElements;
        this.filtro.pagina = res.number;
        this.filtro.itensPorPagina = res.size;
      },
      erro => {
        this.errorHandlerService.handle(erro);
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  private excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Excluído com sucesso' });
      if (this.grid.first === 0) {
        this.pesquisar();
      } else {
        this.grid.first = 0;
      }
    },
    erro => {
      this.errorHandlerService.handle(erro);
    });
  }
}
