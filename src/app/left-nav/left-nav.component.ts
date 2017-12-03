import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {SharedDataService} from '../shared-data.service';

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})

export class LeftNavComponent implements OnInit {
  show: string;
  role: string;
  UserName:string;
  constructor(private sharedservice: SharedDataService) { }

  /* Function to fetch the selected link from shared service, used for highlighting here */
  getSelectedLink(): string {
    return this.sharedservice.getSelectedLink();
  }
  
  /* Function to get the User Role */
  getUserRole():string{
    return this.sharedservice.getUserRole();
  }

  ngOnInit() {
   // this.sharedservice.currentMessage.subscribe(message => this.UserName = message)      
    this.role = this.getUserRole();   
    //console.log(this.role) ;
    this.show=this.getSelectedLink();
  }

  onClickedLink(link : string){
    this.sharedservice.saveSelectedLink(link);
  }
}
