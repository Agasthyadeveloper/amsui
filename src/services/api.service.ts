import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor() { }

  getItemsUrl(): string {
    return `${this.apiUrl}get_post_content_tracker/`;
}
}
