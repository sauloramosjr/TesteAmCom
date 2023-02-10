import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]',
})
export class OnlyNumbersDirective {
  constructor(private element: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const input = this.element.nativeElement;
    input.value = value.replace(/\D/g, '');
  }
}
