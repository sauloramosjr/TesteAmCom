import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario$ = of({
    nome: 'saulo adriano ramos junior',
    cpf: '073.780.949-35',
    avatar: 'https://avatars.githubusercontent.com/u/57292499?s=96&v=4',
  });
}
