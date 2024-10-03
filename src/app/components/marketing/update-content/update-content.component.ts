import { Component } from '@angular/core';

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
}
