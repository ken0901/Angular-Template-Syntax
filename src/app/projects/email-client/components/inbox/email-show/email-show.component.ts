import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  /**
   *  Information From the Current Route
   *  
   *  Observable -> Emits values whenever some specific part of the URL changes.
   *  Snapshot -> Simple description of what the URL is right now.
   */
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.snapshot.params.id;

    // this.route.params.subscribe(({ id }) =>{
    //   this.emailService.getEmail(id);
    // });
  }

}
