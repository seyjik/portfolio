import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [


    

    {path : '', component:HomeComponent},
    {path : 'cv', component:CvComponent},
    {path:'home',component:HomeComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'contact',component:ContactComponent},
    { path: '**', redirectTo: '' } 
];
