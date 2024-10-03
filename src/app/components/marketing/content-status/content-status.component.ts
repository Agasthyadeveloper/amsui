import { Component } from '@angular/core';

@Component({
  selector: 'app-content-status',
  templateUrl: './content-status.component.html',
  styleUrl: './content-status.component.css'
})
export class ContentStatusComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
