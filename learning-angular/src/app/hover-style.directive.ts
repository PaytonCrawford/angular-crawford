import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective{

  constructor(private element: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.underline('underline')
    this.bold('bold')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.underline('none')
    this.bold('normal')
  }

  underline(underline: string): void {
    this.element.nativeElement.style.textDecoration = underline || 'underline';
  }

  bold(bold: string): void {
    this.element.nativeElement.style.fontWeight = bold || 'bold';
  }

}

