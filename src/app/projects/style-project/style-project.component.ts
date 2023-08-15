import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'style-project',
  templateUrl: './style-project.component.html',
  styleUrls: ['./style-project.component.css']
})
export class StyleProjectComponent implements OnInit {

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    // this.afs.collection('test').snapshotChanges().subscribe(data => {
    //   console.log(data.map(x => x.payload.doc.data()));
    // });
  }

}
