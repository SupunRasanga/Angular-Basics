import { Directive, OnInit, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCurrencyInput]'
})
export class CurrencyInputDirective implements OnInit {

  @Input() currencyCode: string = '$';
  element!: HTMLInputElement;
  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.element = this.elementRef.nativeElement;
    this.element.style.textAlign = 'right';
    this.element.style.color = 'red';
  }

  // remove non-digit characters
  @HostListener('keyup', ['$event.target.value'])
  keyup(value: string) {
    this.element.value = value.replace(/\D/g, '');
  }

  // remove non-digit characters
  @HostListener('blur', ['$event.target.value'])
  blur(value: any) {
    if (value !== null || value != "") {
      // add thousand separators (,)
      value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      // add currency symbol
      this.element.value = `${this.currencyCode}${value}`;
    }
  }

  // remove currency code and commas
  @HostListener('focus', ['$event.target.value'])
  focus(value: string) {
    value = value.replace(this.currencyCode, '')
    this.element.value = value.replace(',', '');
  }
}
