import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponentComponent } from './pages/skills-component/skills-component.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    AboutComponent,
    SkillsComponentComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MDBBootstrapModule.forRoot() 
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
