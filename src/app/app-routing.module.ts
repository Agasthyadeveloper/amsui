import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectComponent } from './components/civil/project/project.component';
import { AddContentsComponent } from './components/marketing/add-contents/add-contents.component';
import { UpdateContentComponent } from './components/marketing/update-content/update-content.component';
import { ContentStatusComponent } from './components/marketing/content-status/content-status.component';
import { ViewGoalComponent } from './components/marketing/add-contents/view-goal/view-goal.component';
import { ActualTaskComponent } from './components/marketing/update-content/actual-task/actual-task.component';
import { ProjectMarketingComponent } from './components/marketing/project-marketing/project-marketing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'add-task/:taskName', component:AddContentsComponent  },
  { path: 'update-goal/:updatetask', component: AddContentsComponent },
  { path: 'Update-actual/:updateactual', component:UpdateContentComponent  },
  { path: 'Actual-task', component: ActualTaskComponent },
  { path: 'content-status', component: ContentStatusComponent },
  { path: 'view-goals', component: ViewGoalComponent },
  { path: 'project-marketing', component: ProjectMarketingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
