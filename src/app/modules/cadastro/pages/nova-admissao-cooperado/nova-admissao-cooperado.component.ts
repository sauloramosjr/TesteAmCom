import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CpfService } from 'src/app/shared/services/cpf.service';
import { TemplateService } from 'src/app/shared/services/template.service';
import { CustomValidators } from 'src/app/shared/validators';

@Component({
  selector: 'app-nova-admissao-cooperado',
  templateUrl: './nova-admissao-cooperado.component.html',
  styleUrls: ['./nova-admissao-cooperado.component.scss'],
})
export class NovaAdmissaoCooperadoComponent {
  form: FormGroup = this._formBuilder.group({
    cpf: this._formBuilder.control('', [
      CustomValidators.cpf,
      Validators.required,
    ]),
  });
  cpfConsulted$ = this._cpf.cpfConsulted$;
  loading = false;
  actions$ = new BehaviorSubject('');
  subs: Subscription[] = [];
  constructor(
    private _formBuilder: FormBuilder,
    private _templateService: TemplateService,
    private _cpf: CpfService,
  ) {
    this._templateService.atualizaTitulo('Nova Admissão Cooperado');
    this._templateService.atualizaBreadCrumb([
      'Cadastro',
      'Admissão do Cooperado',
      'Nova Admissão de Cooperado',
    ]);
    this._cpf.reset();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  consultarCpf() {
    if (this.form.get('cpf')?.value) {
      this.loading = true;
      this._cpf.consultarCpf(this.form.get('cpf')?.value);
      this.subs.push(
        this.cpfConsulted$.subscribe(() => {
          setTimeout(() => {
            this.loading = false;
          }, 2000);
        }),
      );
    }
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.forEach((e) => {
      e.unsubscribe();
    });
  }
}
