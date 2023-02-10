import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CpfService } from 'src/app/shared/services/cpf.service';
@Component({
  selector: 'app-admissao-footer',
  templateUrl: './admissao-footer.component.html',
  styleUrls: ['./admissao-footer.component.scss'],
})
export class AdmissaoFooterComponent {
  @Input('cpfConsulted') cpfConsulted$!: BehaviorSubject<any>;
  @Input('actions') actions$!: BehaviorSubject<string>;
  @Input('form') form!: FormGroup;
  @Input('steps') steps = 0;
  stepAtual = 1;

  constructor(private _cpf: CpfService) {}
  nextStep() {
    this.actions$.next('next');
    if (this.stepAtual + 1 <= this.steps) {
      this.stepAtual += 1;
    }
  }
  backStep() {
    this.actions$.next('back');
    if (this.stepAtual - 1 != 0) {
      this.stepAtual -= 1;
    }
  }
  resetStep() {
    this.stepAtual = 1;
    this._cpf.reset();
    this.form.reset();
    this.actions$.next('reset');
  }
}
