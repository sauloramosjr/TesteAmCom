import { Component, Input } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input('classe') classe = '';
  src$ = this.authService.usuario$.pipe(map((usuario) => usuario.avatar));

  constructor(private authService: AuthService) {}
}
