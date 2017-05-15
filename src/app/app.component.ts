import { Component} from '@angular/core';
import {} from '@types/node';
import { Router } from '@angular/router';
import '../assets/css/styles.css';

@Component({
  selector: 'app-toor',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router) {}
  
	ticks: number = 10;	
	
	ngOnInit() {		
		let timer = setInterval(() => {
			this.ticks--;
			if(this.ticks == 0) {
				clearInterval(timer);
				this.router.navigate(['/redir']);
			}
		}, 1000);
	}
}