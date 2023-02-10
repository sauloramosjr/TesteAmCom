import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DicasHelperService {
  dicas$ = new BehaviorSubject(1);
  template?: TemplateRef<any>;

  constructor() {}

  dicasToogle() {
    this.dicas$.next(this.dicas$.value + 1);
  }
}
