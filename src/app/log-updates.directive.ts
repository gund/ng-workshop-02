import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appLogUpdates]',
})
export class LogUpdatesDirective {
  constructor(private elemRef: ElementRef) {
    console.log(`Attached to`, this.elemRef.nativeElement);
  }

  // TODO: Log name update events here
  @HostListener('updateName', ['$event'])
  logEvent($event): void {
    console.log('%c Updated name: ' + `%c ${$event} `, `color: green; font-weight: 900`, `background: green; color: #fff`);
  }
}
