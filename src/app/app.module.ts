import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { ChapterService } from './chapter/chapter.service'
import { LessonService } from './lesson/lesson.service'
import { AppComponent } from './app.component';
import { ChapterComponent } from './chapter/chapter.component';
import { LessonComponent } from './lesson/lesson.component';
import { DayComponent } from './day/day.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './question-bank/dynamic-form-question/dynamic-form-question.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduledProgramsComponent } from './scheduled-programs/scheduled-programs.component';
import { TrainingProgramComponent } from './training-program/training-program.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { ModuleComponent } from './module/module.component';
import { MatchHeightDirective } from './match-height.directive';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { EmailComponent } from './email/email.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { SharedDataService } from './shared-data.service';
import { AuthguardGuard } from './authguard.guard';
import { SelfregistrationComponent } from './selfregistration/selfregistration.component';
import { InprogressComponent } from './inprogress/inprogress.component';
import { CompletedComponent } from './completed/completed.component';
import { DatePickerModule } from 'angular-io-datepicker/src/datepicker';
import { DataService } from './data.service';
import { LoginService } from './login/login.service';
import { Ng2PaginationModule } from "ng2-pagination";
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider } from "angular4-social-login";
import { TrainingManagerComponent } from './training-manager/training-manager.component';
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,        
    provider: new GoogleLoginProvider("123010608103-3mvjgn7qmtvd1t2gd0hgk4rfebn49if1.apps.googleusercontent.com")
    //provider: new GoogleLoginProvider("1029688053841-edg82sso9d7t27fvp8dofifpdb1vtgdd.apps.googleusercontent.com")
  }
]);
export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    ChapterComponent,
    LessonComponent,
    DayComponent,
    DynamicFormQuestionComponent,
    TrainingDetailComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    ScheduledProgramsComponent,
    TrainingProgramComponent,
    StudentComponent,
    CourseComponent,
    ModuleComponent,
    MatchHeightDirective,
    LeftNavComponent,
    EmailComponent,
    CourseDetailComponent,
    SelfregistrationComponent,
    InprogressComponent,
    CompletedComponent,
    TrainingManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    AppRoutingModule, 
    ReactiveFormsModule, 
    FormsModule, 
    ChartsModule, 
    DatePickerModule,
    Ng2PaginationModule,
    SocialLoginModule],
  providers: [   
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    ChapterService, 
    LessonService, 
    SharedDataService, 
    AuthguardGuard,
    DataService,
   LoginService],
    
  bootstrap: [
    AppComponent]  
})
export class AppModule { 
 
}
