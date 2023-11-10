import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact-footer',
  templateUrl: './contact-footer.component.html',
  styleUrls: ['./contact-footer.component.sass'],
})
export class ContactFooterComponent {
  mail: boolean = false;
  instagram: boolean = false;
  location: boolean = false;

  currentItem(itemName: string) {
    this.mail = itemName === 'mail';
    this.instagram = itemName === 'instagram';
    this.location = itemName === 'location';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any) {
    const clickedElement = event.target as HTMLElement;

    // Check if the clicked element is not inside the contact-card
    if (!clickedElement.closest('.contact-card')) {
      // Reset variables to false
      this.mail = false;
      this.instagram = false;
      this.location = false;
    }
  }
}
