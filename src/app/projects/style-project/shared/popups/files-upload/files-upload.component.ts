import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  multiple: boolean;
  crop: boolean;
}

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.css']
})
export class FilesUploadComponent implements OnInit {
  isHovering: boolean;

  files: File[] = [];
  imageFile: File;
  isError: boolean;

  filesURLs: string[] = [];

  constructor(private dialogRef: MatDialogRef<FilesUploadComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  toggleHover(event: boolean){
    this.isHovering = event;
  }

  onDrop(files: FileList): void {
    this.isError = false;

    if(this.data.crop && files.length > 1){
      this.isError = true;
      return;
    }

    for(let i=0; i<files.length; i++){
      this.files.push(files.item(i));
    }

    console.log(files);
  }

  onUploadComplete(url: string): void {
    this.filesURLs.push(url);
  }
}
