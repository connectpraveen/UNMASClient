import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../shared-data.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  UserName:string;
  constructor(private sharedservice: SharedDataService) { }

  ngOnInit() {
    this.sharedservice.currentMessage.subscribe(message => this.UserName = message);        
  }

}
