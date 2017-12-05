import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../shared-data.service';
import { AuthService } from 'angular4-social-login';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  UserName:string;
  constructor(private router: Router,private sharedservice: SharedDataService,private authService: AuthService) { }

  ngOnInit() {
    this.sharedservice.currentMessage.subscribe(message => this.UserName = message);        
  }

  signOut(): void {
    this.authService.signOut();
    setTimeout(() => {
      this.router.navigate(['login']);
      // this.trainingmanagerservice.saveName(this.name);
    }, 1000);

  }

}
