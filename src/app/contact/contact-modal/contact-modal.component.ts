import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.sass']
})

export class ContactModalComponent implements OnInit {

  titleText:string = "";
  contactText : string = "";
  number: number = 0;

  constructor( public dialogRef: MatDialogRef<ContactModalComponent>, public clipboard: Clipboard, public snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA)
    public data:any) {
      this.number = data.number

    }


  ngOnInit(){
    if (this.number == 1) {
      this.titleText = "Telephone: "
      this.contactText = "(45) 9 99764271"
    }

    if (this.number == 2) {
      this.titleText = "Email: "
      this.contactText = "gabriel.ribeiro.ofc@hotmail.com"
    }
    else {
      console.error("Modal initiation error, number doesn't exist!")
    }
  }

  copy(){
    this.clipboard.copy(this.contactText);
    this.snackbar.open('Copied to clipboard!','',{
      duration: 2000
    })
  }
}
