import { Injectable } from '@angular/core';
import { UserDetails } from './UserDetails';
import { DataService } from '../data.service';

@Injectable()
export class LoginService {    
   users: UserDetails[]=[];   
   /* get the trainings from the database */
    getUsers(): UserDetails[] {
    return this.users;
  }
  
  constructor(private _dataService: DataService) {
    this._dataService.getRoles()
    .subscribe(res => this.getdata(res));    
}

    public getdata(result)
    {      
      let roles = result.map(data => data.training_program.users);      
      roles[0].forEach(element => {
        this.users.push({ id:element.id, username:element.username, type:element.type, role:element.role  });   
      });                    
    }
}
