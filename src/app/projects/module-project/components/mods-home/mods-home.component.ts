import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

}
