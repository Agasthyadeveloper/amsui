import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actual-task',
  templateUrl: './actual-task.component.html',
  styleUrl: './actual-task.component.css'
})
export class ActualTaskComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  selectedModule: string = '';
  modules: string[] = ['Content Tracker', 'Collateral Tracker', 'Marketing Calender'];

  updateactualtask: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.updateactualtask = params['cardName'];
    });

    console.log(this.updateactualtask);
  }
}
