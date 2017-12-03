import { Injectable } from '@angular/core';
import {Day} from './day'
import { DataService } from '../data.service'
/* Service to manipulate Days */
@Injectable()
export class DayService {
users: Array<any>;  
static Days: Day[]=[];
  /*Get number of Days for each course */
public getDays(): Day[] { 
  return DayService.Days;
}
constructor(private _dataService: DataService) 
{ 
  this._dataService.getUsers()
  .subscribe(res => this.getdata(this.users = res));        
}
public getdata(result)
{
  //console.log(res);
  let lessons = result.map(data => data.catalogue[0].UNMASTraining[0].courses[0].modules[0].lessons);  
  let lessionData=lessons[0];
  lessionData.forEach(element => {       
  DayService.Days.push({id:element.id,title:element.title, lessonId:['1','2','3','4','5','6']});
  });  
}
}
