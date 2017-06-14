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
      state('grey', style({
        backgroundColor: '#93959B',
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
  code = '';
  auth = 1;
  level = 'red';
  red: string = 'red';
  orange: string = 'grey';
  green: string = 'grey';
  locked = false;

  padPress(button) {
    if (!this.locked)
  	// Send code
  	if (button == '#') {

  		// Send first authentication
  		if (this.auth == 1) {

  			// Send code to server and validate
  			this.httpService.postCode(this.auth, parseInt(this.code)).subscribe(response => {
  				this.level = response.result;

  				// If code was correct, move to next auth step
  				if (this.level == 'orange') {
  					this.auth = 2;
            this.orange = 'orange';
            this.red = 'grey';
            this.header = 'SMS sent';
            setTimeout(()=> this.header = 'Enter second code', 1000);
  				}
          else if (this.level == 'blocked') {
            var counter = 10;
            var intervalId = 0;

            // Blink all red 3 times and keep all red
            this.header = "Blocked.";

            // Lock for 10 seconds
            this.locked = true;
            intervalId = setInterval(() => {
              if (counter != 0) {
                counter--;
              }
              else {
                this.locked = false;
                clearInterval(intervalId);
                this.header = 'Enter code';
                counter = 10;
                this.orange = 'grey';
                this.red = 'grey';


              }
            }, 1000)

          }
  				else {
            this.header = 'Incorrect, try again';
            // Make red blink
            setTimeout(()=> this.header = 'Enter code', 1000);
  				}
  			});
  		}

  		// Send second authentication
  		if (this.auth == 2) {
  			// Send code to server and validate
  			this.httpService.postCode(this.auth, parseInt(this.code)).subscribe(response => {
  				this.level = response.result;

  				// If code was correct, move to next auth step
  				if (this.level == 'green') {
            this.header = 'Success';
            this.green = 'green';
            this.orange = 'grey;'
            setTimeout(()=> this.header = 'Enter code', 2000);
            setTimeout(()=> this.red = 'red', 2000);
            setTimeout(()=> this.green = 'grey', 2000);

  				}
  				else {
            this.header = 'Incorrect, try again';
            setTimeout(()=> this.header = 'Enter code', 1000);
            // Make red blink
  					this.red = 'red';
            this.orange = 'grey';
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
