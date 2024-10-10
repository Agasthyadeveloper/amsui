import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../../services/api.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-goal',
  templateUrl: './view-goal.component.html',
  styleUrl: './view-goal.component.css'
})
export class ViewGoalComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  selectedModule: string = '';
  modules: string[] = ['Content Tracker', 'Collateral Tracker', 'Marketing Calender'];

  currentCard: string | null = null;

  constructor(private route: ActivatedRoute,private apiService: ApiService, private http: HttpClient) {}

  ngOnInit() {
    this.getcontenttask()
  }

  getcontent: any[] = [];
  getcontenttask(): void {
    this.http.get<any>(this.apiService.getandpostcontenttracker()).subscribe(
      (data) => {
        this.getcontent = data;
      },
      (error) => {
        console.error('Error fetching items', error);
      }
    );
  }
  
}