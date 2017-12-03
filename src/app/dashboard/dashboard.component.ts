import { Component, OnInit, ViewChild } from '@angular/core';
import {SharedDataService} from '../shared-data.service';
import { ScheduledProgramsService } from '../scheduled-programs/scheduled-programs.service'
import { ScheduledProgram } from '../scheduled-programs/scheduled-program'
import { Student } from '../student/student'
import { StudentService } from '../student/student.service'
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ScheduledProgramsService, StudentService]
})
export class DashboardComponent implements OnInit {
  @ViewChild("studbaseChart") studchart: BaseChartDirective;
   @ViewChild("statusbaseChart") statuschart: BaseChartDirective;
selectedIndex : number;
count=0;  _dataLabels = [];
 /* Data Values for Doughnut Chart */
 public doughnutChartLabels:string[] = ['Scheduled', 'Inprogress', 'Completed'];
 public doughnutChartData:number[] = [34, 6, 60];
 public doughnutChartType:string = 'doughnut';
 public doughnutChartOptions:any = {
    responsive: true
 };
  /* Data Values for Bar Chart */
 public studbarChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public UserName:string;
  public studbarChartLabels:string[];
  public studbarChartType:string = 'bar';
  public studbarChartLegend:boolean = false;
 
  public studbarChartData:any[]
    
    /* Data Values for Bar Chart */
 public statusbarChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
 
  public statusbarChartLabels:string[] = ['invited', 'enrolled', 'active','inactive', 'completed', 'failed'];
  public statusbarChartType:string = 'bar';
  public statusbarChartLegend:boolean = false;
 
  public statusbarChartData:any[] ;   
   constructor(private sharedservice: SharedDataService, private spservice: ScheduledProgramsService, private studservice: StudentService) { 

   }
  ngOnInit() {      
    /* save the link in shared service to highlight the left nav */
    this.saveSelectedLink('dashboard');    
    /* render the Student and Student Status Charts with dynamic data*/
    this.updateStudChart(this.getScheduledPrograms());
    this.updateStatusChart(this.statusbarChartLabels);    
    
  }
  
  /* function to save the selected link in shared service */
  saveSelectedLink(selectedlink : string){
   return this.sharedservice.saveSelectedLink(selectedlink);
  }
  /* get the scheduled programs from database */
  getScheduledPrograms(): ScheduledProgram[] {
    return this.spservice.getScheduledPrograms();
  }
  
  /* function to fetch the inprogress training programs from the service for program coordinator  */
   getInprogressTrainingPrograms() {
    return this.spservice.getInprogressTrainingPrograms();
  }
  
   /* function to fetch the completed training programs from the service for program coordinator  */
   getCompletedTrainingPrograms() {
    return this.spservice.getCompletedTrainingPrograms();
  }
  
  /* fetches the students from the database */
  getStudents(): Student[] {
    return this.studservice.getStudents();
  }
  
  /* when a slice of doughtnut chart is clicked, update the other two charts dynamically */
  public chartClicked(e: any): void {
    this.selectedIndex = e.active[0]._index;
    /* if Scheduled is clicked */
    if(this.selectedIndex === 0){
      this.updateStudChart(this.getScheduledPrograms());
      this._dataLabels = ['invited','enrolled'];
      this.updateStatusChart(this._dataLabels);
    }
    /* if Inprogress is clicked */
    else  if(this.selectedIndex === 1){
      this.updateStudChart(this.getInprogressTrainingPrograms());
      this._dataLabels = ['invited','enrolled','active','inactive'];
      this.updateStatusChart(this._dataLabels);
      }
      /* if Completed is clicked */
    else if(this.selectedIndex === 2){
      this.updateStudChart(this.getCompletedTrainingPrograms());
      this._dataLabels = ['invited','enrolled','completed','failed'];
      this.updateStatusChart(this._dataLabels);
    }
  }
  
   /* fetches the invited students from the database */
  getTrainingStudentCountByStatus(stat : string): number {
    return this.studservice.getTrainingStudentCountByStatus(stat);
   }
  
  /* function to update the Student Bar Chart */
  public updateStudChart(datasets : any) : void{
   /* create local arrays for labels and datasets */
   let _dataSets:Array<any> = new Array(datasets.length);
   let _dataLabel:Array<any> = new Array(datasets.length); 
   /* populate the local array */
   for (let i = 0; i < datasets.length; i++) {
      _dataSets[i] = {data: new Array(datasets.length), label: datasets[i].trainingName};
      _dataLabel[i] = datasets[i].trainingName;
      for (let j = 0; j < datasets.length; j++) {
        if(i === j)
        _dataSets[i].data[j] = datasets[i].studentCount;
        else
          _dataSets[i].data[j] = 0;
      }
   }
    /* assign the local arrays to chart data */
   this.studbarChartData = _dataSets;
   this.studbarChartLabels = _dataLabel;
    /* redraw the chart as there are data and label changes */
   if (this.studchart !== undefined) {
       this.studchart.chart.destroy();
       this.studchart.chart = 0;

       this.studchart.datasets = _dataSets;
       this.studchart.labels = _dataLabel;
       this.studchart.ngOnInit();
    }
}

  /* function to update the Status Bar Chart */
  public updateStatusChart(_dataLabels) : void{
    let count = 0;
    /* create local array for datasets */
   let _dataSets:Array<any> = new Array(_dataLabels.length);
    /* populate the local array */
    for (let i = 0; i < _dataLabels.length; i++) {
      count = this.getTrainingStudentCountByStatus(_dataLabels[i])
       _dataSets[i] = {data: new Array(_dataLabels.length), label: _dataLabels[i]};
        for (let j = 0; j < _dataLabels.length; j++) {
        if(i === j)
        _dataSets[i].data[j] = count;
        else
          _dataSets[i].data[j] = 0;
      }
   }
    /* assign the local arrays to chart data */
   this.statusbarChartData = _dataSets;
   this.statusbarChartLabels = _dataLabels;
    /* redraw the chart as there are data and label changes */
    if (this.statuschart !== undefined) {
       this.statuschart.chart.destroy();
       this.statuschart.chart = 0;
       this.statuschart.datasets = _dataSets;
       this.statuschart.labels = _dataLabels;
       this.statuschart.ngOnInit();
    }
  }
}
