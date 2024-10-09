import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { HttpClient } from '@angular/common/http';

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

  constructor(private route: ActivatedRoute, private apiService: ApiService, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currenttask = params['taskName'];
      this.updatetask = params['updatetask'];
      console.log("current task:", this.currenttask)
      console.log("update task:", this.updatetask)
    });
    this.loadItems();
  }


  items: any[] = [];
  loadItems(): void {
    this.http.get<any>(this.apiService.getItemsUrl()).subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching items', error);
      }
    );
    console.log("im here",this.items)
  }

  startDate: string = '';
  endDate: string = '';
  minEndDate: string = '';
  numberOfDaysText: string = '0 day';

  updateEndDateLimit() {
    if (this.startDate) {
      this.minEndDate = this.startDate;
      this.calculateNumberOfDays();
    }
  }

  calculateNumberOfDays() {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);

      const timeDiff = end.getTime() - start.getTime();
      const numberOfDays = timeDiff >= 0 ? Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1 : 0;
      if (numberOfDays === 1) {
        this.numberOfDaysText = `${numberOfDays} day`;
      } else {
        this.numberOfDaysText = `${numberOfDays} days`;
      }
    } else {
      this.numberOfDaysText = '0 day';
    }
  }
}
