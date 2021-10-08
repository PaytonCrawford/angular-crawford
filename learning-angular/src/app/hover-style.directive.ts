import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective{

  constructor(private element: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.underline('underline')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.underline('none')
  }

  underline(underline: string): void {
    this.element.nativeElement.style.textDecoration = underline || 'underline';
  }

}
