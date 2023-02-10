import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { StepperComponent } from './pages/nova-admissao-cooperado/components/stepper/stepper.component';
import { NovaAdmissaoCooperadoComponent } from './pages/nova-admissao-cooperado/nova-admissao-cooperado.component';
import { AdmissaoFooterComponent } from './pages/nova-admissao-cooperado/components/admissao-footer/admissao-footer.component';

@NgModule({
  declarations: [
    CadastroComponent,
    NovaAdmissaoCooperadoComponent,
    StepperComponent,
    AdmissaoFooterComponent,
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CadastroModule {}
