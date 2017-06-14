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
        backgroundColor: '#BC5163',
      })),
      state('orange', style({
        backgroundColor: '#F6C346',
      })),
      state('green', style({
        backgroundColor: '#70C278',
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
  headerColor = 'blueText';
  red: string = 'red';
  orange: string = 'grey';
  green: string = 'grey';
  locked = false;

  padPress(button) {
    if (!this.locked) {
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
              setTimeout(()=> this.header = 'Enter second code', 2000);
    				}
            // If code was entered incorrectly 5 times, block
            else if (this.level == 'blocked') {
              var counter = 10;
              var intervalId;

              this.headerColor = 'redText';
              this.header = "BLOCKED";

              // Blink all lights red 3 times seconds
              this.red = 'grey';
              setTimeout(() => this.red = 'red', 300);
              setTimeout(() => this.red = 'grey', 600);
              setTimeout(() => this.red = 'red', 900);
              setTimeout(() => this.red = 'grey', 1200);
              setTimeout(() => this.red = 'red', 1500);

              setTimeout(() => this.orange = 'red', 300);
              setTimeout(() => this.orange = 'grey', 600);
              setTimeout(() => this.orange = 'red', 900);
              setTimeout(() => this.orange = 'grey', 1200);
              setTimeout(() => this.orange = 'red', 1500);

              setTimeout(() => this.green = 'red', 300);
              setTimeout(() => this.green = 'grey', 600);
              setTimeout(() => this.green = 'red', 900);
              setTimeout(() => this.green = 'grey', 1200);
              setTimeout(() => this.green = 'red', 1500);

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
                  this.green = 'grey';
                  this.headerColor = 'blueText';
                }
              }, 1000)
            }
            // If code was incorrect, ask to try again
    				else {
              this.header = 'Incorrect, try again';
              // Make red blink
              setTimeout(()=> this.header = 'Enter code', 2000);
              
              // Blink red 3 times
              this.red = 'grey';
              setTimeout(() => this.red = 'red', 300);
              setTimeout(() => this.red = 'grey', 600);
              setTimeout(() => this.red = 'red', 900);
              setTimeout(() => this.red = 'grey', 1200);
              setTimeout(() => this.red = 'red', 1500);
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
              this.orange = 'grey';
              this.headerColor = 'greenText';

              // Reset for next person
              setTimeout(()=> this.header = 'Enter code', 2000);
              setTimeout(()=> this.red = 'red', 2000);
              setTimeout(()=> this.green = 'grey', 2000);
              setTimeout(()=> this.headerColor = 'greenText', 2000);

    				}
    				else {
              this.header = 'Incorrect, try again';
              setTimeout(()=> this.header = 'Enter code', 2000);
              this.orange = 'grey';

              // Blink red 3 times
              setTimeout(() => this.red = 'red', 300);
              setTimeout(() => this.red = 'grey', 600);
              setTimeout(() => this.red = 'red', 900);
              setTimeout(() => this.red = 'grey', 1200);
              setTimeout(() => this.red = 'red', 1500);
    				}
    			});

          // Reset to one no matter what (for next user or for failure)
          this.auth = 1;
    		}

    		// Reset code and authentication level
        if (!this.locked) {
    		  this.code = '';
        }
    	}

    	// Clear code
    	else if (button == 'C') {
    		this.code = '';
        this.header = 'Enter code';
    	}

    	else {
    		this.code += button;
        this.header = this.code;
    	}
    }
  }
}
