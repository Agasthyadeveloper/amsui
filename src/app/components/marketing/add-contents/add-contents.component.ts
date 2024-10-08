import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contents',
  templateUrl: './add-contents.component.html',
  styleUrl: './add-contents.component.css'
})
export class AddContentsComponent {

  // side bar
  isSidebarOpen = true;
  
  
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  // end side bar

  selectedModule: string = '';
  modules: string[] = ['Content Tracker', 'Collateral Tracker', 'Marketing Calender'];

  currenttask: string | null = null;
  updatetask: string | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currenttask = params['taskName'];
      this.updatetask = params['updatetask'];
    });
    this.apifromservice();
  }

  postcontenttracker: string = '';
  createCollateraltracker: string = '';
  apifromservice(){
    this.postcontenttracker = this.apiService.getandpostcontenttracker()
    this.createCollateraltracker = this.apiService.getandpostCollateraltracker()
  }

  cont_Task_name: string='';
  cont_goal_start_date: Date | null = null;
  cont_goal_end_date: Date | null = null;
  cont_goal_no_of_days: string|null = null;
  cont_goal_quality: number | undefined;
  cont_goal_quantity: number | undefined;
  cont_assigned_by: string='yoganandhan';
  cont_assigned_to: string| null = null;

  successmgs : boolean = false;
  createcontenttask() {
    const apiUrl = this.postcontenttracker;
    const requestBody = {
      "cont_Task_name": this.cont_Task_name,
      "cont_goal_start_date": this.cont_goal_start_date,
      "cont_goal_end_date": this.cont_goal_end_date,
      "cont_goal_no_of_days": this.cont_goal_no_of_days,
      "cont_goal_quality": this.cont_goal_quality,
      "cont_goal_quantity": this.cont_goal_quantity,
      "cont_assigned_by": this.cont_assigned_by,
      "cont_assigned_to": this.cont_assigned_to,
      "cont_status": "New",
      "cont_model_name": this.currenttask,
      "cont_project_id": 1,
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(apiUrl, requestBody, httpOptions).subscribe(
      (response: any) => {
        console.log(response);
        this.successmgs = true
        setTimeout(() => {
          this.successmgs = false; // Optionally hide the message
          this.router.navigate(['/view-goals']); // Replace with your target route
        }, 3000);
      },
      (error: any) => {
        console.log('Post request failed', error);
      }
    );
  }

  col_Task_name: string='';
  col_goal_start_date: Date | null = null;
  col_goal_end_date: Date | null = null;
  col_goal_no_of_days: string|null = null;
  col_goal_quality: number | undefined;
  col_goal_quantity: number | undefined;
  col_assigned_by: string='yoganandhan';
  col_assigned_to: string| null = null;

  createCollateraltask() {
    const apiUrl = this.postcontenttracker;
    const requestBody = {
      "cont_Task_name": this.col_Task_name,
      "cont_goal_start_date": this.col_goal_start_date,
      "cont_goal_end_date": this.col_goal_end_date,
      "cont_goal_no_of_days": this.col_goal_no_of_days,
      "cont_goal_quality": this.col_goal_quality,
      "cont_goal_quantity": this.col_goal_quantity,
      "cont_assigned_by": this.col_assigned_by,
      "cont_assigned_to": this.col_assigned_to,
      "cont_status": "New",
      "cont_model_name": this.currenttask,
      "cont_project_id": 1,
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(apiUrl, requestBody, httpOptions).subscribe(
      (response: any) => {
        console.log(response);
        this.successmgs = true
        setTimeout(() => {
          this.successmgs = false; // Optionally hide the message
          this.router.navigate(['/view-goals']); // Replace with your target route
        }, 3000);
      },
      (error: any) => {
        console.log('Post request failed', error);
      }
    );
  }


  startDate: string = '';
  endDate: string = '';
  minEndDate: Date | null = null;
  numberOfDaysText: string = '0 day';

  updateEndDateLimit() {
    if (this.cont_goal_start_date) {
      this.minEndDate = this.cont_goal_start_date;
      this.calculateNumberOfDays();
    }
  }

  calculateNumberOfDays() {
    if (this.cont_goal_start_date && this.cont_goal_end_date) {
      const start = new Date(this.cont_goal_start_date);
      const end = new Date(this.cont_goal_end_date);

      const timeDiff = end.getTime() - start.getTime();
      const numberOfDays = timeDiff >= 0 ? Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1 : 0;
      if (numberOfDays === 1) {
        this.cont_goal_no_of_days = `${numberOfDays} day`;
      } else {
        this.cont_goal_no_of_days = `${numberOfDays} days`;
      }
    } else {
      this.cont_goal_no_of_days = '0 day';
    }
  }
}
