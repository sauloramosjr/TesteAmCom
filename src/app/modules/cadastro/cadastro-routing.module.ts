import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from 'src/app/modules/cadastro/cadastro.component';
import { NovaAdmissaoCooperadoComponent } from 'src/app/modules/cadastro/pages/nova-admissao-cooperado/nova-admissao-cooperado.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroComponent,
    children: [
      {
        path: '',
        component: NovaAdmissaoCooperadoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroRoutingModule {}
