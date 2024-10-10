import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor() { }

  getandpostcontenttracker(): string {
    return `${this.apiUrl}marketing_content_tracker/`;
  }

  updatecontenttracker(): string {
    return `${this.apiUrl}marketing_content_tracker/`;
  }

}
