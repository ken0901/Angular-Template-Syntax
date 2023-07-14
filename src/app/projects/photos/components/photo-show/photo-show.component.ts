import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../service/photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  pohtoUrl: string;

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.photosService.getPhoto().subscribe((response) =>{
      this.pohtoUrl = response.urls.regular;
    });
  }

}
