import { Injectable } from '@angular/core';
import { Module } from './module'

/* Service to manipulate Module Data */
@Injectable()
export class ModuleService {
MODULES: Module[]=[{id: 1 , moduleName: 'Field Operations', createdDate:'Nov-23-2016',createdBy: 'UNMAS, Libya',thumbnailsrc:'../assets/images/thumbnail.jpg', body:''},
      {id: 2 , moduleName: 'Field and Temporary Storage', createdDate:'Nov-23-2016',createdBy: 'UNMAS, Libya',thumbnailsrc:'../assets/images/thumbnail.jpg', body:''}
];
  
  
 /* Function to fetch modules in a particular course */
 getModules(): Module[] {
    return this.MODULES;
  }
  
  /* Function to fetch all the modules */
   getAllModules(): Module[] {
    return this.MODULES;
  }
  
  /* function to fetch the number of modules in a course */
  getModuleCount(): number{
    return 15;
  }
  
  constructor() { }
}

