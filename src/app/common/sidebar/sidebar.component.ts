import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() isOpen = true;
  
  expandedMenu: string | null = null;

  toggleMenu(menuName: string) {
    if (this.expandedMenu === menuName) {
      this.expandedMenu = null;
    } else {
      this.expandedMenu = menuName;
    }
  }

  isMenuExpanded(menuName: string): boolean {
    return this.expandedMenu === menuName;
  }
}
