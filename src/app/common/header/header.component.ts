import { Component, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private breakpointObserver: BreakpointObserver,private location: Location) {}
  @Output() toggleSidebarEvent = new EventEmitter<void>();
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.toggleSidebarEvent.emit();
  }


  goBack(): void {
    this.location.back();
  }
}