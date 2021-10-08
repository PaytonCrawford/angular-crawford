import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.underline();
  }

  @HostListener('mouseleave') onMouseLeave() {

  }

  constructor(private element: ElementRef) {
    element.nativeElement.style.underline
  }

  private underline() {
    this.element.nativeElement.style.underline
  }

}
