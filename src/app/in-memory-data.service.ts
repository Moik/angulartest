import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let images = [
      'sports', 
      'abstract', 
      'people', 
      'transport', 
      'city', 
      'technics', 
      'nightlife', 
      'animals'
    ];
    return {images};
  }
}