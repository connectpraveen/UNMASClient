import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { LoginService } from './login.service';
import { Validators, FormArray, FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { GoogleLoginProvider } from 'angular4-social-login';
import { UserDetails } from './UserDetails';
@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  /* variable set to show sign or login or autenticate page*/
  show = 'sign-in';
  model: any = {};
  authorizedFlag = false;
  username: string; password: string;
  role: string; sub: any;
  isValid = true;
  user: SocialUser;
  message: string;
  UsersData: UserDetails[];
  constructor(private router: Router, private sharedservice: SharedDataService, private route: ActivatedRoute, private authService: AuthService, private loginservice: LoginService) {    
  }

  ngOnInit() {    
    this.authService.authState.subscribe(res => this.getdata(this.user = res));
   
  }
  getdata(user)
  {
    this.sharedservice.currentMessage.subscribe(message => this.message = message);
    setTimeout(() => {
      this.UsersData = this.loginservice.getUsers();   
      //console.log(this.UsersData);
    }, 1000);
    setTimeout(() => {
      if(user!=null)
      {        
        this.newMessage(user.name + '!');   
        let found=0;
        this.UsersData.forEach(element => {        
          if (element.username == user.email) {
            found=1;
            this.onLogin(element.role);
          }
        });
        if(found==0)
        {
          this.onLogin('student');
        }
      }                
    }, 5000);
  }
  newMessage(str) {
    this.sharedservice.changeMessage(str)
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
  /* function to set the user role : admin, program coordinator or student */
  setUserRole(role: string) {
    this.sharedservice.setUserRole(role);
    //console.log(this.user.name);
    //this.sharedservice.UserName=this.user.name;
  }

  /* function to get user role : admin, program coordinator or student */
  getUserRole(): string {
    return this.sharedservice.getUserRole();
  }

  /* function executed on click of Sign In Button */


  /* function executed on click of Authorize Button */
  onAuthorize(): void {
    /* navigate the user depending on his role */
    var role = this.getUserRole();
    this.authorizedFlag = true;
    if (role === 'admin' && this.model.code === '984602')
      this.router.navigate(['dashboard']);
    else
      this.authorizedFlag = false;
  }

  /* authenticate the user */
  onLogin(_role) {
    //  this.newMessage(this.user.name);  

    if (_role == 'student')
      this.setUserRole('student');
    if (_role == 'admin')
      this.setUserRole('admin');
    if (_role == 'manager')
      this.setUserRole('manager');
    if (_role == 'admin' || _role == 'manager')
      this.router.navigate(['dashboard']);
    if (_role == 'student')
      this.router.navigate(['training-detail']);
  }
}
