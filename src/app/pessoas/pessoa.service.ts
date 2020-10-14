import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PessoaFilter } from '../filter/pessoa-filter';
import { map } from 'rxjs/operators';

@Injectable()
export class PessoaService {

  pessoassUrl = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: PessoaFilter): Observable<any> {
    const head = new HttpHeaders();
    let params = new HttpParams();

    head.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    return this.http.get(`${this.pessoassUrl}?`, { headers: head, params })
    .pipe(
      map((res: any) => res)
    );
  }

  pesquisarTodos(filtro: PessoaFilter): Observable<any> {
    const head = new HttpHeaders();
    let params = new HttpParams();

    head.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoassUrl}?`, { headers: head, params })
    .pipe(
      map((res: any) => res)
    );
  }
}
