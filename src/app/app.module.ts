import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { CategryComponent } from './categry/categry.component';
import { SliderComponent } from './slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './log-in/log-in.component';
import { NotesComponent } from './notes/notes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { MathmaticsComponent } from './mathmatics/mathmatics.component';
import { SubscribComponent } from './subscrib/subscrib.component';
import { LibraryComponent } from './library/library.component';
import { IconComponent } from './icon/icon.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    SignInComponent,
    CoursesComponent,
    CategryComponent,
    SliderComponent,
    LogInComponent,
    NotesComponent,
    ProfileComponent,
    MathmaticsComponent,
    SubscribComponent,
    LibraryComponent,
    IconComponent,
    NotFoundComponent,
  ],
  imports:[
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
     {path: '', component: HomeComponent},
     {path: 'signup', component: SignInComponent },
     {path: 'courses', component: CategryComponent },
     {path: 'login', component: LogInComponent },
     {path: 'setting', component: ProfileComponent },   
     {path: 'library', component: LibraryComponent },   
     {path: '**', component: NotFoundComponent },   
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
