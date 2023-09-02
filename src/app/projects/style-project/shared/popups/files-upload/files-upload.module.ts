import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesUploadDirective } from '../files-upload/files-upload.directive';
import { FilesUploadComponent } from './files-upload.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DropZoneDirective } from './directives/drop-zone/drop-zone.directive';
import { UploadComponent } from './components/upload/upload.component';
import { FileSizePipe } from './pipes/file-size/file-size.pipe';

@NgModule({
  declarations: [
    FilesUploadDirective,
    FilesUploadComponent,
    DropZoneDirective,
    UploadComponent,
    FileSizePipe,
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
