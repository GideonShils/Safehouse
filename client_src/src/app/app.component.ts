import { Component } from '@angular/core';
import { HttpPostService } from './http-post.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('changeColor', [
      state('red', style({
        backgroundColor: '#DF5835',
      })),
      state('orange', style({
        backgroundColor: '#F6C346',
      })),
      state('green', style({
        backgroundColor: '#99C356',
      })),
      transition('* <=> *', animate('100ms ease-in')),
    ]),
  ]
})
export class AppComponent {

  constructor(private httpService:HttpPostService) { }

  title = 'Safehouse';
  header = 'Enter code';
  logo = '../assets/logo.png';
  ledColor = 'red';
  code = '';
  auth = 1;
  state: string = 'red';

  clickMe() {
    if (this.state === 'red') {
      this.state = 'green';
    }
    
  }

  padPress(button) {

  	// Send code
  	if (button == '#') {

  		// Send first authentication
  		if (this.auth == 1) {

  			// Send code to server and validate
  			this.httpService.postCode(this.auth, parseInt(this.code)).subscribe(response => {
  				this.ledColor = response.result;

  				// If code was correct, move to next auth step
  				if (this.ledColor == 'orange') {
  					this.auth = 2;
            this.state = 'orange';
            this.header = 'SMS sent';
  				}
  				else {
            this.header = 'Incorrect, try again';
  					// COME BACK
  				}
  			});
  		}

  		// Send second authentication
  		if (this.auth == 2) {
  			// Send code to server and validate
  			this.httpService.postCode(this.auth, parseInt(this.code)).subscribe(response => {
  				this.ledColor = response.result;

  				// If code was correct, move to next auth step
  				if (this.ledColor == 'green') {
            this.state = 'green';
            this.header = 'Success';
  				}
  				else {
            this.state = 'red';
            this.header = 'Incorrect, try again';
  					// COME BACK
  				}
  			});

        // Reset to one no matter what (for next user or for failure)
        this.auth = 1;
  		}

  		// Reset code and authentication level
  		this.code = '';
  	}

  	// Maybe update this as a feature?
  	else if (button == 'C') {
  		this.code = '';
      this.header = 'Enter code';
  	}

  	else {
  		this.code += button;
      this.header = this.code;
  	}

  	console.log(this.code);
  }
}
