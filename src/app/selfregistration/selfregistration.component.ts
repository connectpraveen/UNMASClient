import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Validators,  FormArray,  FormControl, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-selfregistration',
  templateUrl: './selfregistration.component.html',
  styleUrls: ['./selfregistration.component.css']
})
export class SelfregistrationComponent implements OnInit {
 /* variables used in this class */   
code: string; sub: any;
  showForm = false;
  userMsg: string;
  userRole : string;
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  
  ngOnInit() {
  /* validate the code, show form if code is valid */
      this.sub = this.route.params.subscribe(params => {
       this.code = params['code']; } );
    if(this.route.snapshot.params.code === 'ABCD')
      {
        this.showForm = true;
        this.userRole = 'Manager';
      }else if(this.route.snapshot.params.code === 'EFGH')
      {
      this.showForm = true;
      this.userRole = 'Student';
    }    
    else/* hide the form */{
      this.showForm = false ;
      this.userMsg = 'Not a Valid User !!!'
    }
  }
  
  onSubmit(){
    this.showForm = false;
    this.userMsg = 'You have been registered successfully !';
  }
  
  onCancel(){
  }
}
