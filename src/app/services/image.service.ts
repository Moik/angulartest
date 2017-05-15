import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImageService {
    constructor(private http: Http) { }

    private imgUrl = 'api/images';

    getImages() {
        return this.http.get(this.imgUrl);
	}
}