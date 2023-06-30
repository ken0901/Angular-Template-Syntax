import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  // @Input() backgroundColor: string;

  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    
    // NEVER DO THIS !!!
    // setTimeout(() => {
    //   this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    // }, 50);
   }

   @Input('appClass') set backgroundColor(color: string){
    this.element.nativeElement.style.backgroundColor = color;
   }

}






// Communicate from parent to child component...

// Parent component template
// <app-card [title]= " 'SnowyMountains' "></app-card>

// Child component class
// import {Input} from 'angular'
// class ChildComponent{
//   @Input() title: string;
// }