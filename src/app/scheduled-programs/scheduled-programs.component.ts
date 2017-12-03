import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScheduledProgramsService } from './scheduled-programs.service'
import { ScheduledProgram } from './scheduled-program'
import { EmailComponent } from '../email/email.component'
import {SharedDataService} from '../shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators,  FormArray, FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { DatePicker } from 'angular-io-datepicker'

@Component({
   moduleId: module.id,
  selector: 'scheduled-programs',
  templateUrl: './scheduled-programs.component.html',
  styleUrls: ['./scheduled-programs.component.css'],
  providers: [ScheduledProgramsService]
})
export class ScheduledProgramsComponent implements OnInit {
  @ViewChild('openModal') openModal: ElementRef;
  /* variables used in this component */
  model: any = {};
  show: string;
  checkboxValue:boolean;
  Programs: ScheduledProgram[];
  AssignedPrograms: ScheduledProgram[];
  mailIds : string;
  userRole : string;
  
  constructor(private spservice: ScheduledProgramsService, 
    private router: Router, private sharedservice: SharedDataService, private activated : ActivatedRoute) {
   }

  /* function to fetch the scheduled programs from the service */
   getScheduledPrograms() {
    return this.spservice.getScheduledPrograms();
  }
  
  /* function to fetch the assigned scheduled programs from the service for program coordinator  */
   getAssignedScheduledPrograms() {
    return this.spservice.getAssignedScheduledPrograms();
  }
  
  /* fetch the user role from the shared service */
    getUserRole():string{
    return this.sharedservice.getUserRole();
  }
  
  ngOnInit() {
    this.userRole = this.getUserRole();
    if(this.userRole ==='admin'){
      this.show='scheduled-programs';
      this.Programs = this.getScheduledPrograms();
    }
    else if(this.userRole ==='manager'){
      this.show='assigned-program';
      this.AssignedPrograms = this.getAssignedScheduledPrograms();
    }
    /* save the selected link so that it can be fetched to highlight the left navigation */
    this.saveSelectedLink('scheduled-programs');
   }
  
  /* function to invoke when the user clicks on the Schedule New program icon */
onClickNew(): void {
  this.show = 'schedule-new';
  }
  
   /* Function to save the mailIds */
  saveMailIds(mailIds: string) {
    this.sharedservice.saveMailIds(mailIds);
  }
  
  /* function to invoke when the user submits the add new scheduled program page */
onSubmit(): void {
  /* function add scheduled program */
   this.show = 'scheduled-programs';
  /* if checkbox is checked notify program coordinator with an email */
    if(this.checkboxValue)
      {
        this.openModal.nativeElement.click();
      }
  this.saveMailIds(this.mailIds);  
    }
  
  /* function to invoke when Cancel is clicked in Schedule New Program page */
  onCancel(){
    this.show = 'scheduled-programs';
  }
  
  /* function to invoke when Save as Draft is clicked in Schedule New Program page */
  onSaveAsDraft(){
    this.show = 'scheduled-programs';
  }
  
  /* save the training name in shared service to fetch by other component */
 saveTrainingName(trainingname):void {
    return this.sharedservice.saveTrainingName(trainingname);
  }
  
 /* function when Show Details button is clicked */ 
onShowDetails(trainingname,trainingid){
  this.saveTrainingName(trainingname);
  this.router.navigate(['./training-program',trainingid], {relativeTo: this.activated});
}
  
 /* save the selected link in shared service */
saveSelectedLink(selectedlink : string){
   return this.sharedservice.saveSelectedLink(selectedlink);
  }
}
  