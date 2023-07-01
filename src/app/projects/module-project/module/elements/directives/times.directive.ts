import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appElementTimes]'
})
export class ElementTimesDirective {

  constructor(private viewContainer: ViewContainerRef,
              private templateRef: TemplateRef<any>) { }

  @Input('appElementTimes') set render(times: number){
    this.viewContainer.clear();

    for(let i=0; i<times; i++){
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }

}
