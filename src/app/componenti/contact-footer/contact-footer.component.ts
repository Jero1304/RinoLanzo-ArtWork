import { Component } from '@angular/core';

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
  
}
