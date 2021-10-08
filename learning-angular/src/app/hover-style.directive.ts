import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective implements OnInit {

  constructor(private element: ElementRef) {

  }

  ngOnInit(): void {

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
