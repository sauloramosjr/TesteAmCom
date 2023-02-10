import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  titulo$ = new BehaviorSubject('');
  breadcrumbs$ = new BehaviorSubject<string[]>([]);
  constructor(private ngZone: NgZone) {}

  atualizaTitulo(texto: string) {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.titulo$.next(texto);
      }, 0);
    });
  }
  atualizaBreadCrumb(breadcrumbs: string[]) {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.breadcrumbs$.next(breadcrumbs);
      }, 0);
    });
  }
}
