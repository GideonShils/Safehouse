import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpPostService {

  constructor(private http: Http) { }

  private url:string = '/auth';

  // Sends code and recieves verification response
  // 
  postCode(authNum, codeNum) {

  	var json = JSON.stringify({
  		auth: authNum,
  		code: codeNum
  	});

  	var headers = new Headers();
  	headers.append('Content-Type', 'application/json');

  	return this.http.post(this.url, json, {headers:headers}).map((res: Response) => res.json());
  }

}
