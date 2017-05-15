import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let images = [
      'http://lorempixel.com/800/400/sports', 
      'http://lorempixel.com/800/400/abstract', 
      'http://lorempixel.com/800/400/people', 
      'http://lorempixel.com/800/400/transport', 
      'http://lorempixel.com/800/400/city', 
      'http://lorempixel.com/800/400/technics', 
      'http://lorempixel.com/800/400/nightlife', 
      'http://lorempixel.com/800/400/animals'
    ];
    return {images};
  }
}