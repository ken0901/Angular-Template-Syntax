import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesUploadDirective } from '../files-upload/files-upload.directive';
import { FilesUploadComponent } from './files-upload.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    FilesUploadDirective,
    FilesUploadComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ImageCropperModule
  ],
  exports:[
    FilesUploadComponent,
    FilesUploadDirective
  ]
})
export class FilesUploadModule { }
