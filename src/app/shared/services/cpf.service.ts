import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IConsultarCpf } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CpfService {
  //  private _http:HttpClient   eu incluiria este pacote para chamar a API
  cpfConsulted$ = new BehaviorSubject<IConsultarCpf | any>(false);

  reset() {
    this.cpfConsulted$.next(false);
  }
  consultarCpf(cpf: string) {
    // Aqui eu retornaria this._http.get(API+ 'rota' + cpf)
    // Para efeito demonstrativo estou apenas retornando um Observable de um objeto,
    //  sendo apenas o cpf dinâmico
    this.cpfConsulted$.next(false);
    setTimeout(() => {
      this.cpfConsulted$.next({
        nome: 'Saulo Adriano Ramos Junior',
        cpf,
        status: 'regular',
        contas: [
          {
            tipo: 'corrente',
            numero: '778461-8',
          },
          {
            tipo: 'aplicação',
            numero: '557932-4',
          },
        ],
      });
    }, 2000);
    return this.cpfConsulted$;
  }
}
