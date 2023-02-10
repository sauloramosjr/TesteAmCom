import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCpfMask]',
})
export class CpfMaskDirective {
  private readonly CPF_LENGTH = 11;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    this.formatCpf(value);
  }

  private formatCpf(value: string): void {
    let newValue = value;
    newValue = newValue.replace(/\D/g, '');
    if (newValue.length > this.CPF_LENGTH) {
      newValue = newValue.substring(0, this.CPF_LENGTH);
    }

    let formattedValue = newValue;
    if (newValue.length > 3) {
      formattedValue = newValue.substring(0, 3) + '.' + newValue.substring(3);
    }
    if (newValue.length > 6) {
      formattedValue =
        formattedValue.substring(0, 7) + '.' + newValue.substring(6);
    }
    if (newValue.length > 9) {
      formattedValue =
        formattedValue.substring(0, 11) + '-' + newValue.substring(9);
    }
    this.el.nativeElement.value = formattedValue;
  }
}
