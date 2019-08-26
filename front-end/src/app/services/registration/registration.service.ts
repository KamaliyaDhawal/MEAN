import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
	apiURL: string = environment.apiURL;
	saveURL : string = this.apiURL + 'register/save'; 
  constructor(private http: HttpClient) { }

  save(data) {
  	return this.http.post(this.saveURL, data);
  }
}
