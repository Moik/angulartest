import { Component } from '@angular/core';
import { OwlCarousel } from 'ng2-owl-carousel';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {} from '@types/node';
import {ImageService} from '../services/image.service'

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
    constructor(private http: Http, private imageService: ImageService) {}

	images: string[];

	getImages() {
		this.imageService.getImages().subscribe(response => this.images = response.json().data);
	}
	
	ngOnInit() {
		this.getImages();
	}
}