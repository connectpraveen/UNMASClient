import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../shared-data.service';

/* Component to be showed in Email Modal Dialog */
@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
/* variables used in this class */
subject: string;
userRole: string;
redirectLink: string;
mailIds : string;
selectedLink : string;
  
constructor(private sharedservice: SharedDataService) {  }
/* Function to get the User Role */
  getUserRole(): string {
    return this.sharedservice.getUserRole();
  }

     /* Function to get the selected link */
  getSelectedLink(): string {
    return this.sharedservice.getSelectedLink();
  }
 
   /* Function to get the mailIds */
  getMailIds(): string {
    return this.sharedservice.getMailIds();
  }
  
  ngOnInit() {
    this.mailIds = this.getMailIds();
    this.userRole = this.getUserRole();
    this.selectedLink = this.getSelectedLink();  
    if (this.selectedLink === 'scheduled-programs') {
    this.subject = 'Invitation to Register as Training Programme Manager';
    this.redirectLink = 'http://localhost:4200/manager/selfregistration/ABCD';
    }else if (this.selectedLink === 'students') {
    this.subject = 'Invitation to Register for Online Training Programme';
    this.redirectLink = 'http://localhost:4200/student/selfregistration/EFGH';
  }
 }
}