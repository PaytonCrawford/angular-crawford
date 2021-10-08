import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective{

  @Input() bold: boolean | undefined

  ngOnInit(): void {
    this.element.nativeElement.style.bold = this.bold
  }

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.bold = this.bold
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
