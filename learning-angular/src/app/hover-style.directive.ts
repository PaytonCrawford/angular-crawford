import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  constructor(private element: ElementRef) {
    element.nativeElement.style.underline
  }

  private highlight(colour: string) {
    this.element.nativeElement.style.backgroundColor = colour
  }
}
