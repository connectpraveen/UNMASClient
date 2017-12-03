import { Component } from '@angular/core';
import { ChapterComponent } from './chapter/chapter.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  users: Array<any>;  
  
    // Create an instance of the DataService through dependency injection
    constructor(private _dataService: DataService) {
      // Access the Data Service's getUsers() method we defined
      this._dataService.getUsers()
          .subscribe(res => this.getdata(this.users = res));               
         
    }
    public getdata(result)
    {
      //console.log(res);
      let lessons = result.map(data => data.catalogue[0].UNMASTraining[0].courses[0].modules[0].lessons);
      //console.log(lessons[0]);
    }
}
