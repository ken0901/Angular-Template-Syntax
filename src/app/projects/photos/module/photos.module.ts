import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoShowComponent } from '../components/photo-show/photo-show.component';

@NgModule({
  declarations: [
    PhotoShowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhotoShowComponent
  ]
})
export class PhotosModule { }
