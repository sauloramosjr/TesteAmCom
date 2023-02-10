import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input('breadcrumbs') breadcrumbs: string[] = [];

  breadCrumbsToString() {
    let breadCrumbsString = '';
    this.breadcrumbs.forEach((b, i) => {
      const stringArray = Array.from(b.toLowerCase());
      // pega o segundo caractere adiante e se tiver espaço,
      //separará cada palavra em array e colocará em maiúsculo
      // a primeira letra de cada palavra
      const sub = stringArray
        .join('')
        .substring(1)
        .split(' ')
        .map((e, i) => {
          if (i === 0) {
            return e;
          }
          return e[0].toUpperCase() + e.substring(1);
        })
        .join(' ');
      if (i == 0 || i == this.breadcrumbs.length) {
        //se for o primeiro breadcrumb não precisa colocar a barra '/' antes, se não colocatá a barra '/'
        breadCrumbsString += ' ' + stringArray[0].toUpperCase() + sub;
      } else {
        breadCrumbsString += ' / ' + stringArray[0].toUpperCase() + sub;
      }
    });
    return breadCrumbsString;
  }
}
