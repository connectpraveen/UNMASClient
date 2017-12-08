import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from './student'
import { StudentDetails } from './students'
import { StudentService } from './student.service'
import { Location } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { EmailComponent } from '../email/email.component';
import { SharedDataService } from '../shared-data.service';
import { DataService } from '../data.service';
@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {
  /* variables used in this component */
  @ViewChild('openModal') openModal: ElementRef;
  public myForm: FormGroup;
  UserName:string;
  Students: Student[];
  StudentDetails: StudentDetails[]=[];  
  invitedStudents: Student[];
  student: Student;
  checkboxValue: boolean = true;
  name: string;
  email: string;
  qtd: any[] = [];
  indx: number = 0;
  show = 'student-training-info';
  userRole: string;
  training:any;
  IsManager:boolean=false;
  /* Bar chart data */
  public barChartOptions: any = {
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
          mirror: false,
          beginAtZero: true,
          max: 50,
          min: 0,
          stepSize: 25
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
          mirror: true,
        }
      }]
    },
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false
  };

  public barChartLabels: string[] = ['']
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [{ data: [34, 0], label: 'Enrolled: 86%' }, { data: [16, 0], label: 'Pending: 14%' }];

  constructor(private _dataService: DataService,private router: Router,private studentservice: StudentService, private _location: Location, private _fb: FormBuilder, private sharedservice: SharedDataService) { this.userRole = this.getUserRole();
    this._dataService.getTraining()
    .subscribe(res => this.gettraining(res));
  }
  public gettraining(result) {
    //console.log(res);
    let lessionData;
    let lessons = result.map(data => data.training_program);
    let x=lessons[0];
    
    if(this.sharedservice.getUserRole()==='admin')
    {
      for(let i=0;i<x.length;i++)   
      {                
        if(x[i].program_manager_email==this.sharedservice.getSelectedManager())
        {     
          lessionData= x[i];             
          for( let j=0;j<lessionData.students.length;j++)
          {
            this.StudentDetails.push({ name: lessionData.students[j].Name, email: lessionData.students[j].Email });
          } 
        }                         
      }  
      
     
    }
     
    //console.log(lessionData);
  }
  /* function to save the selected link in shared service, used to highlight left navigation */
  saveSelectedLink(selectedlink: string) {
    return this.sharedservice.saveSelectedLink(selectedlink);
  }

  /* function to fetch the students from Student Service */
  getStudents() {
    return this.studentservice.getStudents();
  }

  /* function to fetch the invited students from Student Service */
  getInvitedStudents() {
    return this.studentservice.getInvitedStudents();
  }

  /* function to fetch the students from Student Service by Id */
  getStudentById(id): Student {
    return this.studentservice.getStudentById(id);
  }

  /* fetch the logged in user role from shared service */
  getUserRole(): string {
    return this.sharedservice.getUserRole();
  }

  ngOnInit() {
    
    this.sharedservice.currentMessage1.subscribe(message => this.UserName = message);       
    this.userRole = this.getUserRole();
    
    if (this.userRole === 'admin') {      
      this.IsManager=false;       
    }
    else if (this.userRole === 'manager') {
      this.IsManager=true;
      this.show = 'student-training-info';
      this.StudentDetails = this.studentservice.getStudentDetail();
      //this.invitedStudents = this.studentservice.getInvitedStudents();
      this.saveSelectedLink('students');
      this.myForm = this._fb.group({
        studentsdata: this._fb.array([
          this.initStudentData()
        ])
      });
    }
   
  }

  /* function used in invite students form to add name and email textboxes on click of + sign */
  initStudentData() {
    return this._fb.group({
      name: [''],
      email: [''],
    });
  }

  /* function to invoke on click of View Profile */
  onViewClick(id) {
    this.show = 'student-profile';
    this.student = this.studentservice.getStudentById(id);
  }

  /* funtion to invoke on click of Invite Students icon */
  onInviteClick(): void {
    this.show = 'invite-new';
  }

  /* function to dynamically add additional text boxes */
  addHtml(): void {
    this.indx = this.indx + 2;
    const control = <FormArray>this.myForm.controls['studentsdata'];
    control.push(this.initStudentData());
  }

  /* function to invoke when user clicks on Go Back arrow */
  goBack(): void {
    if (this.userRole === 'manager' && this.show === 'student-training-info')
      this._location.back();
    else if (this.userRole === 'manager' && this.show === 'student-profile')
      this.show = 'student-training-info';
    else if (this.userRole === 'admin' && this.show === 'student-profile')
      this.show = 'students';

  }

  /* function to invoke when user submits the invite new students form */
  onSubmit(): void {
    // if (this.userRole === 'admin')
    //   this.show = 'students';
    // else if (this.userRole === 'manager')
    //   this.show = 'student-training-info';
    // if (this.checkboxValue)
    //   this.openModal.nativeElement.click();
  }

  /* function to invoke when user clicks Save as Draft in the invite new students form */
  onSaveAsDraft() {
    // if (this.userRole === 'admin')
    //   this.show = 'students';
    // else if (this.userRole === 'manager')
    //   this.show = 'student-training-info';
  }

  /* function to invoke when user clicks Cancel in the invite new students form */
  onCancel() {
    if (this.userRole === 'admin')
      this.show = 'students';
    else if (this.userRole === 'manager')
      this.show = 'student-training-info';
  }

  Save() {
    const control = <FormArray>this.myForm.controls['studentsdata'];
    for (let i = 0; i < control.controls.length; i++) {
      if (control.controls[i].value.name != undefined && control.controls[i].value.email != undefined)
        this.studentservice.saveStudents(control.controls[i].value.name, control.controls[i].value.email,this.UserName);
      // this.studentservice.sendEmail(control.controls[i].value.email);
      setTimeout(() => {
        this.router.navigate(['dashboard']);  
        //console.log(this.UsersData);
      }, 1000);
      
    }

  }
}