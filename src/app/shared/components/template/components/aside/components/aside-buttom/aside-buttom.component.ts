import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aside-buttom',
  templateUrl: './aside-buttom.component.html',
  styleUrls: ['./aside-buttom.component.scss'],
})
export class AsideButtomComponent {
  @Input('classe') classe = '';
  @Input('tooltip') toolTip = '';
  @Input('tooltip-position') toolTipPosition:
    | 'right'
    | 'left'
    | 'above'
    | 'below' = 'right';
}
