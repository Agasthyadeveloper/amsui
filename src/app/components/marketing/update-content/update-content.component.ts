import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-content',
  templateUrl: './update-content.component.html',
  styleUrl: './update-content.component.css'
})
export class UpdateContentComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  updateactualtask: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.updateactualtask = params['updateactual'];
    });

    console.log(this.updateactualtask);
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
