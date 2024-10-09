import { Component } from '@angular/core';

@Component({
  selector: 'app-project-marketing',
  templateUrl: './project-marketing.component.html',
  styleUrl: './project-marketing.component.css'
})
export class ProjectMarketingComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
