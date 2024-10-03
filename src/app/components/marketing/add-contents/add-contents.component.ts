import { Component } from '@angular/core';

@Component({
  selector: 'app-add-contents',
  templateUrl: './add-contents.component.html',
  styleUrl: './add-contents.component.css'
})
export class AddContentsComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
