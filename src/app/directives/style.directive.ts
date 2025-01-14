import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]',
  standalone: false
})
export class StyleDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundColor = "orange";
    el.nativeElement.style.padding = "10px";
  }

}
