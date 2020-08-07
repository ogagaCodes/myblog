import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'about', component:AboutComponent},
  {path:'jobs', component:JobsComponent},
  {path:'blog', component:BlogComponent},
  {path:'contact', component:ContactComponent},
  {path:'courses', component:CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
