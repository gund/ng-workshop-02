import {Directive, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appLogUpdates]',
})
export class LogUpdatesDirective {
  constructor(private elemRef: ElementRef) {
    // console.log(`Attached to`, this.elemRef.nativeElement);
  }

  @HostListener('updateName', ['$event'])
  onUpdateName(event) {
    console.log(event);
  }
}
