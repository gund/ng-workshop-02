import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLogUpdates]',
})
export class LogUpdatesDirective {
  constructor(private elemRef: ElementRef) {
    console.log(`Attached to`, this.elemRef.nativeElement);
  }

  // TODO: Log name update events here
}
