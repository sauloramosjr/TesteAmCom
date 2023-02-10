import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DicasHelperService } from 'src/app/modules/cadastro/services/dicas-helper.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  subs: Subscription[] = [];
  templateDicas?: TemplateRef<any>;
  constructor(private _dicas: DicasHelperService) {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this._dicas.dicas$.subscribe((e) => {
      if (e > 1) {
        this.templateDicas = this._dicas.template;
        this.toogle();
      }
    });
  }

  toogle() {
    this.drawer.toggle();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.forEach((e) => {
      e.unsubscribe();
    });
  }
}
