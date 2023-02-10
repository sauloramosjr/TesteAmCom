import { Component } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TemplateService } from 'src/app/shared/services/template.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  breadcrumbs$ = this.templateService.breadcrumbs$;
  titulo$ = this.templateService.titulo$;

  nome$ = this.authService.usuario$.pipe(map((usuario) => usuario.nome));

  constructor(
    private authService: AuthService,
    private templateService: TemplateService,
  ) {}
}
