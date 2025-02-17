import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Modules/components/home/home.component';
import { ProjectsComponent } from './Modules/components/projects/projects.component';
import { ContactComponent } from './Modules/components/contact/contact.component';


export const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];
