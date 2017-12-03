import { Component, OnInit } from '@angular/core';
import { ModuleService } from './module.service';
import {SharedDataService} from '../shared-data.service';
import { Module } from './module';
import { Course } from '../course/course';
import { CourseService } from '../course/course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css'],
  providers : [ ModuleService, CourseService]
})
export class ModuleComponent implements OnInit {
  /* variables used in thsi component */
show = 'all-modules';
Modules: Module[];   
Courses : Course[];
  modulecount:number;
  
  constructor(private moduleservice: ModuleService, private sharedservice: SharedDataService, 
    private courseservice: CourseService, private activated : ActivatedRoute) { }

  ngOnInit() {
    /* if  a parameter is passed in the url, show modules of a particular course */
    if(this.sharedservice.getSelectedLink() === 'all-modules')
    this.Modules = this.moduleservice.getAllModules(); 
      else if(this.sharedservice.getSelectedLink() === 'scheduled-programs'){
    this.saveSelectedLink('scheduled-programs');
    this.modulecount = this.moduleservice.getModuleCount();
    this.Modules = this.moduleservice.getModules();
    this.show = 'show-modules';  
    }/* else show all modules*/
    else{
    this.modulecount = this.moduleservice.getModuleCount();
    this.Modules = this.moduleservice.getModules();
    this.show = 'show-modules';    
    }
  }
    
    /* save the selected link in shared service to highlight it in the left navigation */
   saveSelectedLink(selectedlink : string){
   return this.sharedservice.saveSelectedLink(selectedlink);
  }
    
  /* function to get modules for a course*/
   getModules() {
    return this.moduleservice.getModules();
  }
  
  /* function to get all the modules */
  getAllModules() {
    return this.moduleservice.getModules();
  }
 
 /* function to get the number of modules in a course */
  getModuleCount(): number  {
    return this.moduleservice.getModuleCount();
  }
  
  /* function to get the courses */
  getCourses(){
    return this.courseservice.getCourses();
  }
  
  /* function invoked when the user clicks on Add Module icon */
  onAddModule(): void{
    this.show= 'add-module';
    this.Courses = this.getCourses();
  }
  
  /* function invoked when the user clicks on Submit button in Add module page */
  onSubmit():void{
    this.show='show-modules';
  }
  
}
