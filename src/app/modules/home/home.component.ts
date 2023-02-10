import { Component } from '@angular/core';
import { TemplateService } from 'src/app/shared/services/template.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private templateService: TemplateService) {
    this.templateService.atualizaTitulo('Pagina home para demonstrar rotas');
    this.templateService.atualizaBreadCrumb(['Home']);
  }
}
