import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { TrainingDetail } from './training-detail/training-detail';
@Injectable()
export class DataService {
  result: any;
  serverAddress: string = "http://ec2-18-216-152-50.us-east-2.compute.amazonaws.com:3000/api/";
  localAddress: string = "http://localhost:3000/api/";

  constructor(private _http: Http) {}



  getUsers() {
    return this._http.get(this.serverAddress + "users")
      .map(result => this.result = result.json().data);
  }
  getTraining() {
    //return trainingPromise;
    return this._http.get(this.serverAddress + "trainings")
      .map(result => this.result = result.json().data);
  }
  getRoles() {
    return this._http.get(this.serverAddress + "roles")
      .map(result => this.result = result.json().data);
  }

  postQuotes(Quotes) {
    return this._http.get(this.serverAddress + "quotes?id=1&name=Praveen&id=2&name=Praveen", Quotes)
      .map(result => this.result = result.json().data);
  }

  saveEmail(email) {
    return this._http.get(this.serverAddress + "manageremail?email=" + email)
      .map(result => this.result = result.json().data);
  }

  manageradd(email) {
    return this._http.get(this.serverAddress + "manageradd?email=" + email)
      .map(result => this.result = result.json().data);
  }

  sendEmail(email) {
    return this._http.get(this.serverAddress + "sendemail?email=" + email)
      .map(result => this.result = result.json().data);
  }
  sendEmailStudent(email) {
    return this._http.get(this.serverAddress + "sendemailstudent?email=" + email)
      .map(result => this.result = result.json().data);
  }

  saveName(name) {
    return this._http.get(this.serverAddress + "managername?name=" + name)
      .map(result => this.result = result.json().data);
  }

  saveStudent(name, email,manageremail) {
    return this._http.get(this.serverAddress + "studentname?name=" + name + "&email=" + email+"&manageremail="+manageremail+"&position="+0)
      .map(result => this.result = result.json().data);
  }

  saveProgram(programname, startdate,enddate,managername,manageremail) {
    return this._http.get(this.serverAddress + "programcreate?programname=" + programname + "&startdate=" + startdate+ "&enddate=" + enddate+ "&managername=" + managername+ "&manageremail=" + manageremail)
      .map(result => this.result = result.json().data);
  }

  saveRegistration(email) {
    return this._http.get(this.serverAddress + "regsave?email=" + email)
      .map(result => this.result = result.json().data);
  }
  saveEnroll(email) {
    return this._http.get(this.serverAddress + "enrollsave?email=" + email)
      .map(result => this.result = result.json().data);
  }
}