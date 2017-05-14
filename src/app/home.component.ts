import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlCarousel } from 'ng2-owl-carousel';
// import { IMAGES } from './images'
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {} from '@types/node';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private router: Router, private http: Http) {}

	url: string = "http://lorempixel.com/800/400/";
    // images: string[] = IMAGES.map(item => `${this.url}${item}`);
	images: string[];
	private imgUrl = 'api/images';

	getImages(): Promise<string[]> {
		return this.http.get(this.imgUrl).
			toPromise().
			then(response => response.json().data as string[]).
			then(images => this.images = images.map(item => `${this.url}${item}`)).
			catch((error) => console.error('An error occurred', error));
	}

	ticks: number = 10;	
	
	ngOnInit() {
		this.getImages();
		
		let timer = setInterval(() => {
			this.ticks--;
			if(this.ticks == 0) {
				clearInterval(timer);
				this.router.navigate(['/redir']);
			}
		}, 1000);
	}
}