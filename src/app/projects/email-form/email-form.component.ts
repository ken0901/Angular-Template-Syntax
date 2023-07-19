import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  email: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.email);
  }

}
