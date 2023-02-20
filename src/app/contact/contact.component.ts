import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ContactModalComponent } from './contact-modal/contact-modal.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../app.component.css']
})
export class ContactComponent {
  constructor(public dialog: MatDialog){

  }

  openContact(number:number){
    console.log(number)
    this.dialog.open(ContactModalComponent,{
      data: {number: number},
      width: "40%",
      height: "40%",
      panelClass: 'bg-color'
    })
  }
}
