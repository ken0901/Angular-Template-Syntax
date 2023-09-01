import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.css']
})
export class FilesUploadComponent implements OnInit {
  isHovering: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleHover(event: boolean){
    this.isHovering = event;
  }
}
