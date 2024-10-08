import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


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

  downloadPDF() {
    const data = document.getElementById('content-to-pdf'); // Get the content to convert to PDF
    
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 210; // A4 size width in mm
        const pageHeight = 295; // A4 size height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        const imgData = canvas.toDataURL('image/png'); // Convert the canvas to an image
        const pdf = new jsPDF('p', 'mm', 'a4'); // Create a new jsPDF instance

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight); // Add the image to PDF
        heightLeft -= pageHeight;

        // If the content is larger than one page, add extra pages
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('content-tracker.pdf'); // Save the PDF with a filename
      });
    }
  }
  
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
