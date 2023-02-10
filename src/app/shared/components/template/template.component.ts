import {
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  @Input('breadcrumbs') breadcrumbs: string[] = [];
  @Input('titulo') titulo = '';
  @Input('content') content!: TemplateRef<any>;
  @ViewChild('drawer') drawer!: ElementRef;

  templateSideNav!: TemplateRef<any>;

  exibirSideNav() {
    this.drawer.nativeElement.toogle();
  }

  getTemplateSideNav() {
    return this.templateSideNav || null;
  }
}
