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

  selectedModule: string = '';
  modules: string[] = ['Content Tracker', 'Collateral Tracker', 'Marketing Calender'];

  downloadCSV() {
    const table = document.querySelector('table');
    const rows = table?.querySelectorAll('tr');
    let csvContent = '';
  
    rows?.forEach(row => {
      const cols = row.querySelectorAll('th, td');
      const csvRow: string[] = [];  // Explicitly define csvRow as a string array
      cols.forEach(col => {
        // Get text content and escape quotes
        const cellText = col.textContent?.trim().replace(/"/g, '""');
        csvRow.push(`"${cellText}"`);
      });
      csvContent += csvRow.join(',') + '\n';
    });
  
    // Trigger CSV download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'table_data.csv';
    link.click();
  }
  
}
