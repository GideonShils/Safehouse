import { Component } from '@angular/core';
import { HttpPostService } from './http-post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpService:HttpPostService) { }

  title = 'Safehouse';
  header = 'Enter code';
  logo = '../assets/logo.png';
  ledColor = 'red';
  code = '';
  auth = 1;
  red = 'red';
  orange = 'grey';
  green = 'grey';

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
  					// Display success
            this.orange = 'orange';
            this.red = 'grey';
  				}
  				else {
            this.header = 'Incorrect, try again';
  					// Display failure
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
            this.orange = 'grey';
            this.green = 'green';
            this.header = 'Success';
  					// Display success
  				}
  				else {
            this.orange = 'grey';
            this.red = 'red';
            this.header = 'Incorrect, try again';
  					// Display failure
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


  onEnterOne() {
  	var code = 1365; // CHANGE THIS

  	// Send code to server and validate
  	this.httpService.postCode(this.auth, code).subscribe(response => this.ledColor = response.result);

  	// Check what the response was

  	// If orange, proceed to next step
  	if (this.ledColor == 'orange') {
  		this.auth = 2;
  		this.httpService.postCode(this.auth, code).subscribe(response => this.ledColor = response.result);
  	}

  	// If red, reset
  	if (this.ledColor == 'red') {
  		this.auth = 1;
  	}
  }
}
