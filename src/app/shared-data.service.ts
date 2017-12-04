import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface myData {
   trainingname:string;
   coursename: string;  
}

/* Shared Service to share data among Components */ 
@Injectable()
export class SharedDataService {
private messageSource = new BehaviorSubject<string>("User!");
private messageSource1 = new BehaviorSubject<string>("User!");
currentMessage = this.messageSource.asObservable();
currentMessage1 = this.messageSource1.asObservable();

sharingData: myData={trainingname: 'tname', coursename: 'cname'};
private selectedlink = 'dashboard';  
private userrole='none';
private isUserLoggedIn;
private mailIds='mailTo';  
private static UserName='User!';  
  
changeMessage(message: string) {
  this.messageSource.next(message)
}
changeMessage1(message: string) {
  this.messageSource1.next(message)
}
  /* Function to save the mailIds */
  saveMailIds(mailIds: string) {
    this.mailIds = mailIds;
  }
    
  /* Function to get the mailIds */
  getMailIds(): string {
    return this.mailIds;
  }
  
  /* Function to set the User Logged In Flag */
  setUserLoggedIn() {
    this.isUserLoggedIn=true;
  }
  
  /* Function to get the User Logged In Flag */
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
  
  /* Function to set the User Role */
  setUserRole(role : string) {
    this.userrole = role;
    this.isUserLoggedIn = true;
  }

  /* Function to get the User Role */
  getUserRole():string{
    return this.userrole;
  }
  getUserName():string{
    return SharedDataService.UserName;
  }
    
  /* Function to save training name */
  saveTrainingName(tname : string){
    this.sharingData.trainingname=tname;
  }
  
  /* Function to get the training name */
  getTrainingName(): string{
    return this.sharingData.trainingname;
  }
  
  /* Function to save course name */
  saveCourseName(coursename : string){
    this.sharingData.coursename = coursename;
  }
  
  /* Function to get course name */
  getCourseName(): string {
    return this.sharingData.coursename;
  }
  
  /* Function to save the selected link */
  saveSelectedLink(selectedlink : string){
    this.selectedlink = selectedlink;
  }
  
   /* Function to get the selected link */
  getSelectedLink(): string {
    return this.selectedlink;
  }
 
  constructor() { 
  this.isUserLoggedIn=false;
  }

}
