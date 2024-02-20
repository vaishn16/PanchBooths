import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { OnGetStartedComponent } from './on-get-started/on-get-started.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'gettingstarted',
  children: [
    {path:'',component: OnGetStartedComponent},
    {path:'projects',component: ProjectsComponent},
    {path:'about',component: AboutComponent},
    {path:'contactform',component: ContactComponent}
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
