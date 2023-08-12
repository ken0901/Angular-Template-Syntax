import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private afs: AngularFirestore){

  }

  ngOnInit(): void {
    this.afs.collection('test').snapshotChanges().subscribe(data => {
      console.log(data.map(x => x.payload.doc.data()));
    });
  }
}
