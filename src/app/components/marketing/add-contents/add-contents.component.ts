import { Component } from '@angular/core';

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
  modules: string[] = ['Content Tracker', 'Collateral Tracker','Marketing Calender'];
}
